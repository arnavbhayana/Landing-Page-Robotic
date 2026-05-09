import { useEffect, useState } from 'react'

export default function Navbar({ onRequestDemo }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['products', 'specs', 'industries', 'contact']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: 'rgba(10,14,20,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid rgba(184,255,60,0.15)'
          : '1px solid rgba(255,255,255,0.05)',
        transition: 'border-color 0.3s',
      }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect x="8" y="4" width="16" height="18" rx="2" stroke="#b8ff3c" strokeWidth="1.5" />
            <rect x="12" y="8" width="8" height="6" rx="1" fill="rgba(184,255,60,0.15)" stroke="#b8ff3c" strokeWidth="1" />
            <line x1="16" y1="22" x2="16" y2="28" stroke="#b8ff3c" strokeWidth="1.5" />
            <line x1="10" y1="28" x2="22" y2="28" stroke="#b8ff3c" strokeWidth="1.5" />
            <circle cx="16" cy="11" r="1.5" fill="#b8ff3c" />
          </svg>
          <span className="font-display font-bold text-lg tracking-widest text-white">
            P.L. <span className="text-acid-400">ROBOTICS</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-display tracking-widest text-sm text-gray-400">
          {links.map((section) => (
            <a key={section} href={`#${section}`} className="nav-link hover:text-white transition-colors">
              {section.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={onRequestDemo}
          className="hidden md:block font-display tracking-widest text-xs px-5 py-2 border border-acid-400 text-acid-400  hover:text-green-200 hover:border-[#b8ff3c] hover:cursor-pointer transition-all duration-300"
        >
          REQUEST DEMO
        </button>

        {/* Hamburger */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 relative z-[999]"
  aria-label="Toggle menu"
>
  <span
    className={`w-6 h-[2px] bg-[#b8ff3c] rounded-full transition-all duration-300 ${
      menuOpen ? 'rotate-45 translate-y-[7px]' : ''
    }`}
  />

  <span
    className={`w-6 h-[2px] bg-[#b8ff3c] rounded-full transition-all duration-300 ${
      menuOpen ? 'opacity-0' : ''
    }`}
  />

  <span
    className={`w-6 h-[2px] bg-[#b8ff3c] rounded-full transition-all duration-300 ${
      menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
    }`}
  />
</button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
        <div className="border-t border-acid-400/20 pt-4 flex flex-col gap-4">
          {links.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className="font-display tracking-widest text-sm text-gray-400 hover:text-acid-400 transition-colors"
            >
              {section.toUpperCase()}
            </a>
          ))}
          <button
            onClick={() => { onRequestDemo(); setMenuOpen(false) }}
            className="font-display tracking-widest text-xs px-5 py-3 border border-acid-400 text-acid-400 hover:bg-acid-400 hover:text-steel-900 transition-all duration-300 text-left"
          >
            REQUEST DEMO
          </button>
        </div>
      </div>
    </nav>
  )
}
