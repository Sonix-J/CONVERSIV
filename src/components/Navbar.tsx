import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPlatformDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { to: "/", label: "Homepage" },
    { to: "/consultancy", label: "Consultancy" },
    { to: "/usecase", label: "Use Cases" },
    { to: "/stakeholders", label: "Stakeholders" },
    { to: "/about", label: "About" },
    { to: "/earlyaccess", label: "Early Access" },
  ];

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
        {/* Homepage */}
        <li key={navLinks[0].label}>
          <Link
            to={navLinks[0].to}
            className="relative text-sm text-white hover:text-gray-300 transition-colors group pb-1"
          >
            {navLinks[0].label}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isActive(navLinks[0].to) ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        </li>

        {/* Platform + dropdown toggle */}
        <li className="relative" ref={dropdownRef}>
          <Link
            to="/platform"
            className="relative text-sm text-white hover:text-gray-300 transition-colors group pb-1 pr-4"
          >
            Platform
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isActive("/platform") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          <button
            onClick={() => setPlatformDropdownOpen((prev) => !prev)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle platform dropdown"
          >
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${
                platformDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {platformDropdownOpen && (
            <ul className="absolute top-full left-0 mt-3 w-40 bg-[#0C1A2B] border border-gray-700 rounded-md shadow-lg py-2 list-none">
              <li>
                <a
                  href="https://chat.conversiv.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setPlatformDropdownOpen(false)}
                  className="flex items-center justify-between px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                >
                  Native GPT
                  <span className="ml-1 text-xs">↗</span>
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Remaining links */}
        {navLinks.slice(1).map((item) => (
          <li key={item.label}>
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
          </li>
        ))}
      </ul>

      <button
        className="min-[1300px]:hidden text-2xl text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <ul className="min-[1300px]:hidden absolute top-20 left-0 right-0 bg-[#0C1A2B] border-b border-gray-700 flex flex-col gap-4 px-8 py-6 list-none z-50">
          <li>
            <Link
              to={navLinks[0].to}
              className="relative text-sm text-white hover:text-gray-300 transition-colors group pb-1"
            >
              {navLinks[0].label}
            </Link>
          </li>

          <li>
            <Link
              to="/platform"
              className="text-sm text-white hover:text-gray-300 transition-colors"
            >
              Platform
            </Link>
          </li>

          {navLinks.slice(1).map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="relative text-sm text-white hover:text-gray-300 transition-colors group pb-1"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <a
              href="https://chat.conversiv.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-white hover:text-gray-300 transition-colors"
            >
              Native GPT
              <span className="text-xs">↗</span>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
