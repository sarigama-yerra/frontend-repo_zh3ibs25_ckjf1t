import Navbar from '../components/Navbar'

export default function Writing() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Professional Writing</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">Clear messaging that improves conversion and trust. We write for humans first — and optimize for search.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Website Copy</h3>
              <p className="mt-2 text-slate-300 text-sm">Homepages, product pages, features, pricing, about — all aligned to your brand voice.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Landing Pages</h3>
              <p className="mt-2 text-slate-300 text-sm">Conversion-focused pages for campaigns. A/B tested headlines and CTAs.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Content & Blogs</h3>
              <p className="mt-2 text-slate-300 text-sm">Authority-building articles and guides with keyword research and editorial calendars.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
