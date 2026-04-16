import logo from "../assets/icons/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-8 md:px-16 lg:px-32 py-12 md:py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between">
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Conversiv logo"
              style={{
                height: "200px",
                width: "auto",
                filter: "brightness(0)",
              }}
            />
          </div>
          <p className="text-gray-500 text-sm">
            Smarter Conversations, Faster Conversions
          </p>
          <a
            href="https://www.linkedin.com/company/conversivai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* <div className="flex flex-row flex-wrap gap-8 md:gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Features</h4>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Core features
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Pro experience
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Integrations
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Learn more</h4>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Case studies
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Customer stories
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Best practices
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Support</h4>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              Legal
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
