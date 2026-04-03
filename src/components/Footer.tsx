import logo from "../assets/icons/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-32 py-16">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Conversiv" className="h-50 w-auto" style={{ filter: "brightness(0)" }} />
            {/* <span className="font-bold text-xl tracking-widest">CONVERSIV</span> */}
          </div>
          <p className="text-gray-500 text-sm">
            Smarter Conversations, Faster Conversions
          </p>
          {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
          </a> */}
        </div>

        <div className="flex flex-row gap-16">
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
        </div>
      </div>
    </footer>
  );
}
