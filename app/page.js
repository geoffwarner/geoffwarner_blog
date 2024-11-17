import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to The Geoff Project</h1>
        <p className="text-xl text-black/70 dark:text-white/70">
          Exploring technology, design, and creative development
        </p>
      </div>

      {/* Featured Content Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/blog" className="group">
          <div className="border border-black/[.08] dark:border-white/[.08] rounded-lg p-6 hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors">
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-black/70">Blog</h2>
            <p className="text-black/70 dark:text-white/70">
              Thoughts and insights on web development, design, and technology
            </p>
          </div>
        </Link>

        <Link href="/about" className="group">
          <div className="border border-black/[.08] dark:border-white/[.08] rounded-lg p-6 hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors">
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-black/70">About</h2>
            <p className="text-black/70 dark:text-white/70">
              Learn more about my journey and what drives me
            </p>
          </div>
        </Link>
      </div>

      {/* Optional Featured Work Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Work</h2>
        <div className="border border-black/[.08] dark:border-white/[.08] rounded-lg p-8">
          <div className="aspect-video relative mb-6">
            <Image
              src="/Main_Logo.jpg"
              alt="Featured project"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Project Title</h3>
          <p className="text-black/70 dark:text-white/70">
            A brief description of your featured project and its impact.
          </p>
        </div>
      </div>
    </div>
  );
}
