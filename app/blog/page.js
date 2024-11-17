import { ReaderIcon } from "@radix-ui/react-icons"
import Link from 'next/link'

export default function Blog() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl tracking-wide font-semibold mb-6 flex items-center gap-2">
        <ReaderIcon className="w-8 h-8" />
        BLOG
      </h1>
      
      <div className="max-w-2xl space-y-8">
        <article className="border border-black/[.08] dark:border-white/[.08] rounded-lg p-6 hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors">
          <h2 className="text-xl font-semibold mb-2">The Journey of Web Development</h2>
          <p className="text-black/70 dark:text-white/70 mb-4">
            Exploring the evolution of web technologies and my personal experiences in the field.
          </p>
          <div className="text-sm text-black/50 dark:text-white/50">
            Posted on March 20, 2024
          </div>
        </article>

        <article className="border border-black/[.08] dark:border-white/[.08] rounded-lg p-6 hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors">
          <h2 className="text-xl font-semibold mb-2">Building with Next.js and React</h2>
          <p className="text-black/70 dark:text-white/70 mb-4">
            A deep dive into modern web frameworks and how they're shaping the future of development.
          </p>
          <div className="text-sm text-black/50 dark:text-white/50">
            Posted on March 15, 2024
          </div>
        </article>

        <article className="border border-black/[.08] dark:border-white/[.08] rounded-lg p-6 hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors">
          <h2 className="text-xl font-semibold mb-2">The Power of Design Systems</h2>
          <p className="text-black/70 dark:text-white/70 mb-4">
            How consistent design patterns and component libraries can transform your workflow.
          </p>
          <div className="text-sm text-black/50 dark:text-white/50">
            Posted on March 10, 2024
          </div>
        </article>
      </div>

      <div className="mt-8 flex gap-4 tracking-wide font-semibold">
        <Link 
          href="/" 
          className="text-sm hover:text-black/70 transition-colors"
        >
          ← BACK TO HOME
        </Link>
      </div>
    </div>
  )
} 