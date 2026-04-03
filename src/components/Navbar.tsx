import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-32 h-24 bg-[#0C1A2B]">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 font-semibold text-black">
        <img src={logo} alt="Conversiv logo" className="h-50 w-auto" />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        <li><Link to="/" className="text-sm text-white hover:text-gray transition-colors">Homepage</Link></li>
        <li><Link to="/platform" className="text-sm text-white hover:text-gray transition-colors">Platform</Link></li>
        <li><Link to="/usecase" className="text-sm text-white hover:text-gray transition-colors">Use Cases</Link></li>
        <li><Link to="/stakeholders" className="text-sm text-white hover:text-gray transition-colors">Stakeholders</Link></li>
        <li><Link to="/about" className="text-sm text-white hover:text-gray transition-colors">About</Link></li>
        <li><Link to="/earlyaccess" className="text-sm text-white hover:text-gray transition-colors">Early Access</Link></li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 flex flex-col gap-4 px-8 py-6 list-none z-50">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">About</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">Services</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">Contact</Link></li>
        </ul>
      )}
    </nav>
  )
}