import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Websites that feel fast, look premium, and grow your business
            </h1>
            <p className="mt-6 text-lg text-slate-200 max-w-xl">
              Liteweb Design builds modern websites with hosting, maintenance, and AI-powered experiences baked in. Enterprise-grade quality without enterprise headaches.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:info@liteweb.my" className="rounded-full bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition">Book a free consult</a>
              <a href="/services" className="rounded-full bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition">Explore services</a>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl p-6 max-w-md">
              <p className="text-slate-200 text-sm">Trusted web partner for startups and SMEs</p>
              <ul className="mt-4 text-slate-100/90 text-sm space-y-2 list-disc list-inside">
                <li>Design, build, host, and maintain</li>
                <li>AI chat, voice, and workflow integrations</li>
                <li>Professional copywriting and brand messaging</li>
                <li>Enterprise-grade reliability and security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900"></div>
    </section>
  )
}
