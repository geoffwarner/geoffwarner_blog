import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

export default function Footer() {
  return (
    <footer className="w-full bg-black/[.03] dark:bg-white/[.03] border-t border-black/[.08] dark:border-white/[.08] py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6 font-[family-name:var(--font-geist-sans)]">
        {/* Follow Section */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold tracking-wide">FOLLOW GEOFF</h2>
          
          {/* Social Links */}
          <div className="flex gap-4 items-center">
            <a
              href="https://www.youtube.com/@Geoff_Warner"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center group"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 text-white dark:text-black group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://x.com/Project_Geoff"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center group"
              aria-label="Twitter"
            >
              <TwitterLogoIcon className="w-5 h-5 text-white dark:text-black group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/goffie1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center group"
              aria-label="Instagram"
            >
              <InstagramLogoIcon className="w-5 h-5 text-white dark:text-black group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-black/50 dark:text-white/50 text-center">
          Copyright ©2024 All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
