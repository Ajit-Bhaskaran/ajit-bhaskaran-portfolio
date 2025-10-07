import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: ({ children, ...props }) => {
      return (
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-200" {...props}>
          {children}
        </pre>
      )
    },
    code: ({ children, className, ...props }) => {
      return (
        <code className={`${className} bg-gray-100 px-1 py-0.5 rounded text-sm`} {...props}>
          {children}
        </code>
      )
    },
    h1: ({ children, ...props }) => (
      <h1 className="text-4xl font-light text-gray-900 mb-6 mt-8" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-light text-gray-900 mb-4 mt-8" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-2xl font-medium text-gray-900 mb-3 mt-6" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-gray-700 mb-4 leading-relaxed" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6" {...props}>
        {children}
      </blockquote>
    ),
    a: ({ children, href, ...props }) => (
      <a 
        href={href} 
        className="text-gray-900 hover:text-gray-600 underline" 
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-300" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th className="border border-gray-300 px-4 py-2 bg-gray-50 font-medium text-left text-gray-900" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="border border-gray-300 px-4 py-2 text-gray-700" {...props}>
        {children}
      </td>
    ),
  }
}
