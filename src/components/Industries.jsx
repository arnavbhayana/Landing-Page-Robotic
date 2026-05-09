import { useReveal } from '../hooks/useReveal'

const industries = [
  { emoji: '⚙️', label: 'AUTOMOTIVE' },
  { emoji: '💊', label: 'PHARMA' },
  { emoji: '🍱', label: 'FOOD & BEV' },
  { emoji: '🔌', label: 'ELECTRONICS' },
  { emoji: '📦', label: 'LOGISTICS' },
  { emoji: '🏗️', label: 'AEROSPACE' },
]

export default function Industries() {
  const [headingRef, headingVisible] = useReveal()
  const [gridRef, gridVisible] = useReveal()

  return (
    <section id="industries" className="py-32 max-w-7xl mx-auto px-8">
      <div ref={headingRef} className={`reveal mb-16 ${headingVisible ? 'visible' : ''}`}>
        <p className="font-mono text-acid-400 text-xs tracking-widest mb-3">// SECTORS</p>
        <h2 className="font-display font-black text-5xl lg:text-6xl text-white">
          INDUSTRIES <span className="text-acid-400">SERVED</span>
        </h2>
      </div>

      <div ref={gridRef} className={`reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 ${gridVisible ? 'visible' : ''}`}>
        {industries.map(({ emoji, label }) => (
          <div
            key={label}
            className="border border-acid-400/15 p-4 text-center hover:border-acid-400/50 hover:bg-acid-400/5 transition-all cursor-default group"
          >
            <div className="text-2xl mb-2">{emoji}</div>
            <div className="font-display font-bold text-xs text-gray-400 group-hover:text-white transition-colors tracking-wider">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
