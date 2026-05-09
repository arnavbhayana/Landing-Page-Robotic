import { useReveal } from '../hooks/useReveal'

const products = [
  {
    model: 'MODEL CR-7',
    name: 'COLLABORATIVE\nROBOT',
    description: 'Designed to work safely alongside humans. Force-torque sensing with instant collision detection. Payload 3–16kg.',
    specs: [{ label: 'REACH', value: '850mm' }, { label: 'REPEAT.', value: '±0.03mm' }],
    popular: false,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke="#b8ff3c" strokeWidth="1" strokeDasharray="4 3" />
        <rect x="24" y="16" width="16" height="24" rx="3" fill="rgba(184,255,60,0.1)" stroke="#b8ff3c" strokeWidth="1.5" />
        <circle cx="32" cy="28" r="4" fill="#b8ff3c" />
        <line x1="32" y1="40" x2="32" y2="48" stroke="#b8ff3c" strokeWidth="1.5" />
        <line x1="22" y1="48" x2="42" y2="48" stroke="#b8ff3c" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    model: 'MODEL SC-12',
    name: 'SCARA\nROBOT',
    description: 'High-speed selective compliance for assembly and pick-and-place. Optimised for horizontal movement with vertical rigidity.',
    specs: [{ label: 'SPEED', value: '10m/s' }, { label: 'REPEAT.', value: '±0.01mm' }],
    popular: true,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="28" y="44" width="8" height="12" rx="2" fill="#243044" stroke="#b8ff3c" strokeWidth="1.5" />
        <circle cx="32" cy="44" r="6" fill="#243044" stroke="#b8ff3c" strokeWidth="1.5" />
        <rect x="20" y="28" width="24" height="18" rx="3" fill="rgba(184,255,60,0.1)" stroke="#b8ff3c" strokeWidth="1.5" />
        <rect x="8" y="24" width="20" height="10" rx="2" fill="#1a2332" stroke="#b8ff3c" strokeWidth="1" />
        <rect x="36" y="24" width="20" height="10" rx="2" fill="#1a2332" stroke="#b8ff3c" strokeWidth="1" />
        <circle cx="32" cy="20" r="5" fill="#b8ff3c" />
        <rect x="28" y="10" width="8" height="12" rx="2" fill="#243044" stroke="#b8ff3c" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    model: 'MODEL DX-3',
    name: 'DELTA\nROBOT',
    description: 'Ultra-fast parallel kinematics for sorting, packaging and food processing. Up to 200 picks per minute.',
    specs: [{ label: 'PICKS/MIN', value: '200' }, { label: 'PAYLOAD', value: '3kg' }],
    popular: false,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <polygon points="32,6 58,52 6,52" fill="rgba(184,255,60,0.05)" stroke="#b8ff3c" strokeWidth="1.5" />
        <line x1="32" y1="6" x2="32" y2="36" stroke="#b8ff3c" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="6" y1="52" x2="32" y2="36" stroke="#b8ff3c" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="58" y1="52" x2="32" y2="36" stroke="#b8ff3c" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="32" cy="36" r="5" fill="#b8ff3c" />
        <circle cx="32" cy="6" r="3" fill="#243044" stroke="#b8ff3c" strokeWidth="1" />
        <circle cx="6" cy="52" r="3" fill="#243044" stroke="#b8ff3c" strokeWidth="1" />
        <circle cx="58" cy="52" r="3" fill="#243044" stroke="#b8ff3c" strokeWidth="1" />
      </svg>
    ),
  },
]

export default function Products() {
  const [headingRef, headingVisible] = useReveal()
  const [cardsRef, cardsVisible] = useReveal()

  return (
    <section id="products" className="py-32 max-w-7xl mx-auto px-8">
      <div ref={headingRef} className={`reveal mb-16 ${headingVisible ? 'visible' : ''}`}>
        <p className="font-mono text-acid-400 text-xs tracking-widest mb-3">// PRODUCT LINE</p>
        <h2 className="font-display font-black text-5xl lg:text-6xl text-white">
          ROBOT <span className="text-acid-400">SYSTEMS</span>
        </h2>
      </div>

      <div ref={cardsRef} className={`reveal grid md:grid-cols-3 gap-6 ${cardsVisible ? 'visible' : ''}`}>
        {products.map((p) => (
          <div
            key={p.model}
            className="product-card p-8 group"
            style={p.popular ? { background: 'linear-gradient(135deg, rgba(184,255,60,0.06), rgba(17,24,39,0.9))', borderColor: 'rgba(184,255,60,0.3)' } : {}}
          >
            {p.popular && (
              <div className="absolute top-4 right-4 font-mono text-xs bg-acid-400 text-steel-900 px-2 py-1 font-bold">
                POPULAR
              </div>
            )}
            <div className="mb-6">{p.icon}</div>
            <div className="font-mono text-acid-400 text-xs tracking-widest mb-2">{p.model}</div>
            <h3 className="font-display font-bold text-2xl text-white mb-3 whitespace-pre-line">{p.name}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.description}</p>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              {p.specs.map((s) => (
                <div key={s.label} className="bg-steel-800 px-3 py-2 rounded">
                  <span className="text-gray-500">{s.label}</span><br />
                  <span className="text-acid-400">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
