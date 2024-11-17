import Link from 'next/link'
import Image from 'next/image'
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full py-4 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        {/* Logo/Image Section */}
        <Link href="/" className="flex justify-center w-full mb-4">
          <Image 
            src="/Main_Logo.jpg"
            alt="Geoff Warner"
            width={400}
            height={400}
            className="object-contain dark:invert"
            priority
          />
        </Link>

        {/* Navigation and Social Links */}
        <div className="flex items-center justify-center w-full py-2">
          {/* Main Navigation with fixed spacing */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="hover:text-black/70 transition-colors px-6"
            >
              <span className="text-sm tracking-wide font-semibold">HOME</span>
            </Link>
            <Link 
              href="/blog" 
              className="hover:text-black/70 transition-colors px-6"
            >
              <span className="text-sm tracking-wide font-semibold">BLOG</span>
            </Link>
            <Link 
              href="/about" 
              className="hover:text-black/70 transition-colors px-6"
            >
              <span className="text-sm tracking-wide font-semibold">ABOUT</span>
            </Link>
          </div>

          {/* Separator with adjusted margins */}
          <span className="text-black/30 mx-6">|</span>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.youtube.com/@Geoff_Warner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/70 transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://x.com/Project_Geoff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/70 transition-colors"
              aria-label="Twitter"
            >
              <TwitterLogoIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/goffie1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/70 transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogoIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
