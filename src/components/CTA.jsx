export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-violet-600 via-sky-500 to-amber-300 p-[1px]">
          <div className="rounded-3xl bg-slate-900 p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Let’s build something people love</h3>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Tell us what you’re trying to achieve. We’ll propose the simplest, most effective plan — and ship fast.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="mailto:info@liteweb.my" className="rounded-full bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition">Email us</a>
              <a href="/contact" className="rounded-full bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition">Contact page</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
