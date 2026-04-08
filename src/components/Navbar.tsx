import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-400 px-8 lg:px-32 h-20 bg-[#0C1A2B]">
      <div
        className="flex items-center gap-2 font-semibold cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={logo}
          alt="Conversiv logo"
          style={{ height: "200px", width: "auto" }}
        />
      </div>

      <ul className="hidden lg:flex items-center gap-8 list-none">
        {[
          { to: "/", label: "Homepage" },
          { to: "/platform", label: "Platform" },
          { to: "/usecase", label: "Use Cases" },
          { to: "/stakeholders", label: "Stakeholders" },
          { to: "/about", label: "About" },
          { to: "/earlyaccess", label: "Early Access" },
        ].map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className="text-sm text-white hover:text-gray-300 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="lg:hidden text-2xl text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <ul className="lg:hidden absolute top-20 left-0 right-0 bg-[#0C1A2B] border-b border-gray-700 flex flex-col gap-4 px-8 py-6 list-none z-50">
          {[
            { to: "/", label: "Home" },
            { to: "/platform", label: "Platform" },
            { to: "/usecase", label: "Use Cases" },
            { to: "/stakeholders", label: "Stakeholders" },
            { to: "/about", label: "About" },
            { to: "/earlyaccess", label: "Early Access" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
