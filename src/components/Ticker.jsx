const items = [
  'COBOT SYSTEMS',
  'SCARA AUTOMATION',
  'DELTA ROBOTS',
  'PRECISION ASSEMBLY',
  'PAYLOAD: 0.5–500KG',
  'IP67 RATED',
  '24/7 OPERATION',
  'ZERO FAULT DESIGN',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className="border-y border-acid-400/20 bg-acid-400/5 py-3 overflow-hidden">
      <div className="ticker-track font-mono text-xs text-acid-400/70 tracking-widest">
        {doubled.map((item, i) => (
          <span key={i}>◆ {item}</span>
        ))}
      </div>
    </div>
  )
}
