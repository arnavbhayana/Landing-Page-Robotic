import { useEffect } from 'react'

export default function Modal({ isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-steel-800 border border-acid-400/30 p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white font-mono text-xs"
        >
          ✕ CLOSE
        </button>

        <p className="font-mono text-acid-400 text-xs tracking-widest mb-2">// REQUEST FORM</p>
        <h3 className="font-display font-black text-2xl text-white mb-6">LET'S TALK AUTOMATION</h3>

        <div className="space-y-4">
          <div>
            <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">COMPANY NAME</label>
            <input
              type="text"
              placeholder="Acme Industries"
              className="w-full bg-steel-900 border border-white/10 px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-acid-400 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">EMAIL</label>
            <input
              type="email"
              placeholder="engineer@company.com"
              className="w-full bg-steel-900 border border-white/10 px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-acid-400 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-gray-500 tracking-widest block mb-1">APPLICATION TYPE</label>
            <select className="w-full bg-steel-900 border border-white/10 px-4 py-3 text-gray-300 text-sm focus:border-acid-400 focus:outline-none transition-colors">
              <option>Pick & Place</option>
              <option>Welding</option>
              <option>Assembly</option>
              <option>Palletising</option>
              <option>Quality Inspection</option>
            </select>
          </div>
          <button className="w-full font-display tracking-widest text-sm py-4 bg-acid-400 text-steel-900 font-bold hover:bg-acid-300 transition-colors mt-2">
            SUBMIT REQUEST →
          </button>
        </div>
      </div>
    </div>
  )
}
