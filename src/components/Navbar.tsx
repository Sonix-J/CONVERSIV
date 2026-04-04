import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-8 md:px-16 lg:px-32 h-20 md:h-24 bg-[#0C1A2B]">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <img src={logo} alt="Conversiv logo" className="h-50 w-auto" />
      </Link>

      <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
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
        className="md:hidden text-2xl text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <ul className="md:hidden absolute top-20 left-0 right-0 bg-[#0C1A2B] border-b border-gray-700 flex flex-col gap-4 px-8 py-6 list-none z-50">
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
                className="text-gray-300 hover:text-white"
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
