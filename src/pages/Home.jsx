import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Liteweb Design. All rights reserved.</p>
          <a href="mailto:info@liteweb.my" className="text-slate-300 hover:text-white text-sm">info@liteweb.my</a>
        </div>
      </footer>
    </div>
  )
}
