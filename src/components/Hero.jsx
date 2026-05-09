import { useEffect, useState } from 'react'
import RobotSVG from './RobotSVG'

function useCounter(target, suffix, duration = 2000, start = false) {
  const [value, setValue] = useState(`0${suffix}`)

  useEffect(() => {
    if (!start) return

    let current = 0
    const step = target / (duration / 16)

    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setValue(Math.round(current) + suffix)

      if (current >= target) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [start, target, suffix, duration])

  return value
}

export default function Hero() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const accuracy = useCounter(99, '%', 2000, started)
  const uptime = useCounter(99, '%', 2000, started)
  const units = useCounter(4000, '+', 2000, started)

  return (
    <section className="relative min-h-screen grid-bg flex items-center overflow-hidden pt-24 sm:pt-20">

      {/* Scanline Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
        <div className="scanline" />
      </div>

      {/* Background Text - Centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span
          className="font-display font-black text-[28vw] sm:text-[20vw] tracking-tighter leading-none"
          style={{ color: 'rgba(255,255,255,0.02)' }}
        >
          AUTOMATE
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full grid lg:grid-cols-2 gap-12 items-center z-10">

        {/* Left Content */}
        <div className="text-center lg:text-left">

          {/* Status */}
          <div className="font-mono text-acid-400 text-[10px] sm:text-xs tracking-[0.25em] mb-6 flex items-center justify-center lg:justify-start gap-2">
            <span className="inline-block w-2 h-2 bg-acid-400 rounded-full animate-pulse" />
            SYSTEM ONLINE — REV 4.2.1
          </div>

          {/* Heading */}
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-tight mb-6 glow-text text-white">
            THE FUTURE
            <br />
            <span className="text-[#b8ff3c]">MOVES</span>
            <br />
            ON STEEL
          </h1>

          {/* Description */}
          <p className="text-zinc-300 font-body text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
            Precision-engineered automation solutions for the modern factory
            floor. Cobot, SCARA, and Delta systems built for zero-fault
            performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">

            <a
              href="#products"
              className="font-display tracking-[0.2em] border border-white/20 text-white text-sm px-8 py-4 bg-acid-400 text-steel-900 font-bold hover:border-[#b8ff3c] hover:text-green-200 transition-colors duration-200 text-center"
            >
              EXPLORE SYSTEMS →
            </a>

            <a
              href="#specs"
              className="font-display tracking-[0.2em] text-sm px-8 py-4 border border-white/20 text-white hover:border-[#b8ff3c] hover:text-green-200 transition-all duration-200 text-center"
            >
              VIEW SPECS
            </a>

          </div>

          {/* Stats */}
          <div className="mt-14 sm:mt-16 grid grid-cols-3 gap-3 mb-4 sm:gap-6 border-t border-white/10 pt-8">

            {[
              { value: accuracy, label: 'ACCURACY', color: 'text-[#b8ff3c]' },
              { value: uptime, label: 'UPTIME', color: 'text-white' },
              { value: units, label: 'DEPLOYED', color: 'text-white' },
            ].map(({ value, label, color }) => (
              <div key={label}>
                <div
                  className={`hero-counter font-display font-black text-xl sm:text-3xl ${color}`}
                >
                  {value}
                </div>

                <div className="font-mono text-[10px] sm:text-xs text-gray-500 mt-1 uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Right — Robot & Decorative Rings */}
        <div className="hidden lg:flex relative justify-center items-center min-h-[600px]">

          {/* Rings specifically centered behind the robot */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <div className="absolute w-[450px] h-[450px] border border-acid-400/10 rounded-full animate-drift" />

            <div className="absolute w-[550px] h-[550px] border border-acid-400/5 rounded-full animate-drift-reverse" />

            <div className="absolute w-[350px] h-[350px] border border-acid-400/20 rounded-full animate-pulse opacity-20" />

          </div>

          {/* Robot SVG Container */}
          <div className="relative z-10 w-full flex justify-center">
            <RobotSVG />
          </div>

        </div>
      </div>
    </section>
  )
}