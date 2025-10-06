# Ajit Bhaskaran - Platform Engineer Portfolio

A modern, responsive portfolio website showcasing 16+ years of DevOps and Platform Engineering expertise.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Blog System**: MDX-powered technical blog with syntax highlighting
- **DevOps Showcase**: Complete CI/CD pipeline with Docker and AWS deployment
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Performance Optimized**: Fast loading with optimized images and code splitting

## 🛠️ Tech Stack

### Frontend
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- MDX for blog content
- Lucide React for icons

### DevOps & Deployment
- Docker containerization
- GitHub Actions CI/CD
- AWS S3 + CloudFront hosting
- Terraform for infrastructure as code
- Automated deployment pipeline

### Development Tools
- ESLint + Prettier for code quality
- Husky for git hooks
- Husky for pre-commit checks

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utility functions
│   ├── styles/              # Global styles
│   └── types/               # TypeScript type definitions
├── content/
│   ├── blog/               # MDX blog posts
│   └── projects/           # Project data
├── public/                 # Static assets
├── docker/                 # Docker configuration
├── terraform/              # AWS infrastructure as code
└── .github/                # GitHub Actions workflows
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker (for containerization)
- AWS CLI (for deployment)

### Development

1. Clone the repository:
```bash
git clone https://github.com/ajitbhaskaran/ajit-bhaskaran-portfolio.git
cd ajit-bhaskaran-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Development

```bash
# Build the Docker image
docker build -t ajit-portfolio .

# Run the container
docker run -p 3000:3000 ajit-portfolio
```

## 📝 Blog Posts

Blog posts are written in MDX format and stored in `content/blog/`. Each post should include:

- Frontmatter with title, date, tags, and excerpt
- MDX content with React components support
- Code syntax highlighting
- Responsive images

## 🚀 Deployment

### AWS Deployment

The project is automatically deployed to AWS using:

1. **GitHub Actions** triggers on push to main
2. **Docker** builds the application image
3. **Terraform** provisions AWS infrastructure
4. **S3 + CloudFront** serves the static site
5. **Route 53** manages DNS

### Manual Deployment

```bash
# Build the application
npm run build

# Deploy to AWS (requires AWS CLI setup)
npm run deploy
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for Google ranking
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Next.js automatic optimization

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome!

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: ajit.kanoli@gmail.com
- **LinkedIn**: [ajitbhaskaran](https://www.linkedin.com/in/ajitbhaskaran/)
- **Phone**: +61 469 309 268

---

Built with ❤️ using Next.js, TypeScript, and modern DevOps practices.