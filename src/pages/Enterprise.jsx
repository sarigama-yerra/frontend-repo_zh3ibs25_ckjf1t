import Navbar from '../components/Navbar'

export default function Enterprise() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Enterprise Grade</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">Security, reliability, and governance for teams that need to move fast without breaking things.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Security</h3>
              <p className="mt-2 text-slate-300 text-sm">SSO, role-based access, audit logs, and regular security reviews. We follow best practices end-to-end.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Reliability</h3>
              <p className="mt-2 text-slate-300 text-sm">Global CDN, multi-region backups, uptime monitoring, and on-call support.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Compliance</h3>
              <p className="mt-2 text-slate-300 text-sm">GDPR-ready data handling and vendor management. We help with DPIAs and data mapping.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Scalability</h3>
              <p className="mt-2 text-slate-300 text-sm">Architected for growth. Caching, edge rendering, and performance budgets from day one.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
