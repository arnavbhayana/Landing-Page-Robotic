export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="font-display font-bold text-lg tracking-widest">
          P.L. <span className="text-acid-400">ROBOTICS</span>
        </span>
      </div>
      <div className="font-mono text-xs text-gray-600 tracking-widest">
        © 2026 P.L. ROBOTICS. PRECISION WITHOUT COMPROMISE.
      </div>
      <div className="flex gap-6 font-mono text-xs text-zinc-300 ">
        {['PRIVACY', 'TERMS', 'CAREERS'].map((link) => (
          <a key={link} href="#" className="hover:text-[#b8ff3c] transition-colors">
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}
