import { useReveal } from '../hooks/useReveal'

export default function Contact({ onOpenModal }) {
  const [ref, visible] = useReveal()

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-steel-700 to-steel-900" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full"
        style={{ background: 'linear-gradient(to bottom, rgba(184,255,60,0.3), transparent)' }}
      />

      <div ref={ref} className={`reveal relative max-w-4xl mx-auto px-8 text-center ${visible ? 'visible' : ''}`}>
        <p className="font-mono text-acid-400 text-xs tracking-widest mb-4">// GET IN TOUCH</p>
        <h2 className="font-display font-black text-6xl lg:text-8xl text-white leading-[0.9] mb-8">
          READY TO<br />
          <span className="text-acid-400">AUTOMATE?</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Talk to our engineers. We'll map the right robotic system to your production line within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenModal}
            className="font-display tracking-widest text-sm px-10 py-5 bg-acid-400 text-steel-900 hover:cursor-pointer font-bold hover:border-[#b8ff3c] border border-white/20 hover:text-green-200 transition-colors duration-200"
          >
            REQUEST CONSULTATION →
          </button>
          <a
            href="mailto:sales@plrobotics.com"
            className="font-display tracking-widest text-sm px-10 py-5 border border-white/20 text-white hover:border-[#b8ff3c] hover:text-green-200 hover:text-acid-400 transition-all duration-200"
          >
            EMAIL US
          </a>
        </div>
      </div>
    </section>
  )
}
