# Configure AWS Provider
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  
  backend "s3" {
    bucket = "ajit-portfolio-terraform-state"
    key    = "portfolio/terraform.tfstate"
    region = "ap-southeast-2"
  }
}

provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Project     = "ajit-portfolio"
      Environment = var.environment
      Owner       = "ajit-bhaskaran"
      ManagedBy   = "terraform"
    }
  }
}

# Variables
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-southeast-2"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "domain_name" {
  description = "Domain name for the portfolio"
  type        = string
  default     = "ajitbhaskaran.dev"
}

variable "image_tag" {
  description = "Docker image tag"
  type        = string
  default     = "latest"
}

# Data sources
data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

# S3 Bucket for static website hosting
resource "aws_s3_bucket" "portfolio" {
  bucket = "${var.domain_name}-portfolio"
}

resource "aws_s3_bucket_versioning" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_website_configuration" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket_public_access_block" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.portfolio.arn}/*"
      }
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.portfolio]
}

# CloudFront Distribution
resource "aws_cloudfront_distribution" "portfolio" {
  origin {
    domain_name = aws_s3_bucket_website_configuration.portfolio.website_endpoint
    origin_id   = "S3-${aws_s3_bucket.portfolio.bucket}"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Portfolio distribution"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-${aws_s3_bucket.portfolio.bucket}"
    compress               = true
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/404.html"
  }
}

# Route 53 Hosted Zone
resource "aws_route53_zone" "portfolio" {
  name = var.domain_name
}

# Route 53 Record
resource "aws_route53_record" "portfolio" {
  zone_id = aws_route53_zone.portfolio.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.portfolio.domain_name
    zone_id                = aws_cloudfront_distribution.portfolio.hosted_zone_id
    evaluate_target_health = false
  }
}

# SSL Certificate
resource "aws_acm_certificate" "portfolio" {
  domain_name       = var.domain_name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "portfolio_validation" {
  for_each = {
    for dvo in aws_acm_certificate.portfolio.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.portfolio.zone_id
}

resource "aws_acm_certificate_validation" "portfolio" {
  certificate_arn         = aws_acm_certificate.portfolio.arn
  validation_record_fqdns = [for record in aws_route53_record.portfolio_validation : record.fqdn]
}

# CloudWatch Log Group
resource "aws_cloudwatch_log_group" "portfolio" {
  name              = "/aws/portfolio"
  retention_in_days = 30
}

# Outputs
output "bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.portfolio.bucket
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.portfolio.id
}

output "cloudfront_domain_name" {
  description = "Domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.portfolio.domain_name
}

output "website_url" {
  description = "URL of the portfolio website"
  value       = "https://${var.domain_name}"
}

