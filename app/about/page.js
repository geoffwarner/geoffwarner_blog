import Image from 'next/image'
import Link from 'next/link'
import { InstagramLogoIcon, TwitterLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"

export default function About() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)] max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="md:w-1/3 flex flex-col gap-8">
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-lg overflow-hidden border border-black/[.08] dark:border-white/[.08]">
            <Image 
              src="/G_Warner_ 2.jpg"
              alt="Geoff Warner"
              width={192}
              height={192}
              className="object-cover"
              priority
            />
          </div>

          {/* Contact and Newsletter Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm tracking-wide font-semibold mb-3">CONTACT</h2>
              <div className="flex items-center gap-2 mb-4">
                <EnvelopeClosedIcon className="w-4 h-4" />
                <Link 
                  href="mailto:geoff@geoffwarner.com"
                  className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors"
                >
                  geoff@geoffwarner.com
                </Link>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4 items-center">
                <a
                  href="https://www.youtube.com/@Geoff_Warner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black/70 dark:text-white dark:hover:text-white/70 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/Project_Geoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black/70 dark:text-white dark:hover:text-white/70 transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterLogoIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/goffie1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black/70 dark:text-white dark:hover:text-white/70 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramLogoIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-sm tracking-wide font-semibold mb-2">NEWSLETTER</h2>
              <form className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="px-3 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-md bg-transparent"
                />
                <button 
                  type="submit"
                  className="px-3 py-2 text-sm border border-black/[.08] dark:border-white/[.08] rounded-md hover:bg-black/[.02] dark:hover:bg-white/[.02] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Column - About Text */}
        <div className="md:w-2/3">
          <h1 className="text-3xl tracking-wide font-semibold mb-6">ABOUT</h1>
          <div className="prose dark:prose-invert">
            <p className="text-black/70 dark:text-white/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
  