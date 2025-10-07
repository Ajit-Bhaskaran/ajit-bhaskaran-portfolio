import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: ({ children, ...props }) => {
      return (
        <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto border border-slate-700" {...props}>
          {children}
        </pre>
      )
    },
    code: ({ children, className, ...props }) => {
      return (
        <code className={`${className} bg-slate-700 px-1 py-0.5 rounded text-sm`} {...props}>
          {children}
        </code>
      )
    },
    h1: ({ children, ...props }) => (
      <h1 className="text-4xl font-bold text-slate-100 mb-6 mt-8" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-3xl font-bold text-slate-100 mb-4 mt-8" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-2xl font-semibold text-slate-100 mb-3 mt-6" {...props}>
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-slate-300 mb-4 leading-relaxed" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-slate-300" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-slate-300" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote className="border-l-4 border-teal-400 pl-4 italic text-slate-400 my-6" {...props}>
        {children}
      </blockquote>
    ),
    a: ({ children, href, ...props }) => (
      <a 
        href={href} 
        className="text-teal-400 hover:text-teal-300 underline" 
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-600" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th className="border border-slate-600 px-4 py-2 bg-slate-800 font-semibold text-left text-slate-100" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td className="border border-slate-600 px-4 py-2 text-slate-300" {...props}>
        {children}
      </td>
    ),
  }
}
