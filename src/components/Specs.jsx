import { useReveal } from '../hooks/useReveal'

const stats = [
  { label: 'REPEATABILITY', value: '±0.01', unit: 'mm', color: 'text-acid-400', desc: 'Sub-millimeter precision across all axes' },
  { label: 'MAX PAYLOAD', value: '500', unit: 'kg', color: 'text-white', unitColor: 'text-acid-400', desc: 'Heavy-duty industrial arm configurations' },
  { label: 'PROTECTION', value: 'IP', unit: '67', color: 'text-white', unitColor: 'text-acid-400', desc: 'Dust-tight, waterproof enclosures' },
  { label: 'MTBF', value: '80K', unit: 'hr', color: 'text-white', unitColor: 'text-acid-400', desc: 'Mean time between failures' },
]

const features = [
  { num: '01', title: 'Force-Torque Sensing', desc: '6-axis sensing for safe human collaboration and compliant assembly tasks.' },
  { num: '02', title: 'Integrated Vision System', desc: '3D machine vision with sub-pixel feature detection and real-time processing.' },
  { num: '03', title: 'No-Code Programming', desc: 'Drag-and-drop workflow builder. Deploy complex tasks in minutes, not days.' },
  { num: '04', title: 'Predictive Maintenance', desc: 'AI-powered diagnostics predict failures before downtime occurs.' },
  { num: '05', title: 'OPC-UA & ROS 2', desc: 'Open industrial standards for seamless integration into any smart factory.' },
  { num: '06', title: 'Rapid Deployment', desc: 'From delivery to first production cycle in under 4 hours.' },
]

export default function Specs() {
  const [headingRef, headingVisible] = useReveal()
  const [statsRef, statsVisible] = useReveal()
  const [featuresRef, featuresVisible] = useReveal()

  return (
    <section id="specs" className="py-32 bg-steel-800 grid-bg">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={headingRef} className={`reveal mb-16 ${headingVisible ? 'visible' : ''}`}>
          <p className="font-mono text-acid-400 text-xs tracking-widest mb-3">// TECHNICAL SPECS</p>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-white">
            BUILT TO <span className="text-acid-400">SPEC</span>
          </h2>
        </div>

        <div ref={statsRef} className={`reveal grid md:grid-cols-2 lg:grid-cols-4 gap-4 ${statsVisible ? 'visible' : ''}`}>
          {stats.map((s) => (
            <div key={s.label} className="stat-card p-6">
              <div className="font-mono text-xs text-gray-500 tracking-widest mb-2">{s.label}</div>
              <div className={`font-display font-black text-4xl ${s.color}`}>
                {s.value}
                <span className={`text-xl ${s.unitColor || ''}`}>{s.unit}</span>
              </div>
              <p className="text-gray-500 text-xs mt-2">{s.desc}</p>
            </div>
          ))}
        </div>

        <div ref={featuresRef} className={`reveal mt-12 grid md:grid-cols-2 gap-6 ${featuresVisible ? 'visible' : ''}`}>
          {[features.slice(0, 3), features.slice(3)].map((col, ci) => (
            <div key={ci} className="space-y-3">
              {col.map((f) => (
                <div key={f.num} className="flex items-start gap-4 border border-acid-400/10 p-4 hover:border-acid-400/30 transition-colors">
                  <span className="font-mono text-acid-400 text-xs mt-1">{f.num}</span>
                  <div>
                    <div className="font-display font-bold text-white text-lg">{f.title}</div>
                    <div className="text-gray-500 text-sm">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
