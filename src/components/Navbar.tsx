import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-400 px-8 lg:px-32 h-20 bg-[#0C1A2B]">
      <div
        className="flex items-center gap-2 font-semibold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="Conversiv logo"
          style={{ height: "200px", width: "auto" }}
        />
      </div>

      <ul className="hidden min-[1300px]:flex items-center gap-8 list-none">
        {[
          { to: "/", label: "Homepage" },
          { to: "/platform", label: "Platform" },
          { to: "/consultancy", label: "Consultancy" },
          { to: "/usecase", label: "Use Cases" },
          { to: "/stakeholders", label: "Stakeholders" },
          { to: "/about", label: "About" },
          { to: "/earlyaccess", label: "Early Access" },
          {
            href: "https://chat.conversiv.io/",
            label: "Native GPT",
            external: true,
          },
        ].map((item) => (
          <li key={item.label}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-sm text-white hover:text-gray-300 transition-colors group pb-1"
              >
                {item.label}
                <span className="ml-1 text-xs">↗</span>

                <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
              </a>
            ) : (
              <Link
                to={item.to}
                className="relative text-sm text-white hover:text-gray-300 transition-colors group pb-1"
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    isActive(item.to) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )}
          </li>
        ))}
      </ul>

      <button
        className="min-[1300px]:hidden text-2xl text-white" z
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <ul className="min-[1300px]:hidden absolute top-20 left-0 right-0 bg-[#0C1A2B] border-b border-gray-700 flex flex-col gap-4 px-8 py-6 list-none z-50">
          {[
            { to: "/", label: "Homepage" },
            { to: "/platform", label: "Platform" },
            { to: "/consultancy", label: "Consultancy" },
            { to: "/usecase", label: "Use Cases" },
            { to: "/stakeholders", label: "Stakeholders" },
            { to: "/about", label: "About" },
            { to: "/earlyaccess", label: "Early Access" },
            {
              href: "https://chat.conversiv.io/",
              label: "Native GPT",
              external: true,
            },
          ].map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm text-white hover:text-gray-300 transition-colors group pb-1"
                >
                  {item.label}
                  <span className="ml-1 text-xs">↗</span>

                  <span className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
                </a>
              ) : (
                <Link
                  to={item.to}
                  className="relative text-sm text-white hover:text-gray-300 transition-colors group pb-1"
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                      isActive(item.to) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
