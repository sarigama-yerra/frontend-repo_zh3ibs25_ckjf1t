import Navbar from '../components/Navbar'

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Services</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">End-to-end website delivery with ongoing care. Choose a package or mix-and-match.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Web Design</h3>
              <p className="mt-2 text-slate-300 text-sm">UX-first sites tailored to your brand. Includes design system, responsive layouts, and analytics setup.</p>
              <ul className="mt-4 text-slate-300 text-sm list-disc list-inside space-y-1">
                <li>Brand-aligned UI kit</li>
                <li>SEO-ready pages</li>
                <li>Speed and accessibility focused</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Hosting & Maintenance</h3>
              <p className="mt-2 text-slate-300 text-sm">Managed hosting with monthly updates, backups, uptime monitoring, and support.</p>
              <ul className="mt-4 text-slate-300 text-sm list-disc list-inside space-y-1">
                <li>Fast global CDN</li>
                <li>Automated backups</li>
                <li>Security patches and audits</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">AI Integrations</h3>
              <p className="mt-2 text-slate-300 text-sm">Embed AI chat, voice, and automations into your site and backend processes.</p>
              <ul className="mt-4 text-slate-300 text-sm list-disc list-inside space-y-1">
                <li>Lead capture chatbots</li>
                <li>Voice agents and call routing</li>
                <li>Internal workflow automations</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Professional Writing</h3>
              <p className="mt-2 text-slate-300 text-sm">Clear, persuasive copy for websites, landing pages, blogs, and documentation.</p>
              <ul className="mt-4 text-slate-300 text-sm list-disc list-inside space-y-1">
                <li>Messaging workshops</li>
                <li>Conversion copy</li>
                <li>Voice and tone guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
