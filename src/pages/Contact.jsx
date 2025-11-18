import Navbar from '../components/Navbar'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Contact</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">Tell us about your project. We typically reply within one business day.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <a href="mailto:info@liteweb.my" className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <Mail className="text-white" />
              <h3 className="mt-3 font-semibold text-white">Email</h3>
              <p className="text-slate-300 text-sm">info@liteweb.my</p>
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Phone className="text-white" />
              <h3 className="mt-3 font-semibold text-white">Phone</h3>
              <p className="text-slate-300 text-sm">By appointment after initial email</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <MapPin className="text-white" />
              <h3 className="mt-3 font-semibold text-white">Location</h3>
              <p className="text-slate-300 text-sm">Remote-first. Available worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
