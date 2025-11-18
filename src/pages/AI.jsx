import Navbar from '../components/Navbar'

export default function AI() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">AI Integrations</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">Bring intelligent experiences to your site and operations. We integrate modern AI models for chat, voice, search, and automations.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Famous AI Demo: Chat with your website</h3>
              <p className="mt-2 text-slate-300 text-sm">Interactive demo showcasing an AI assistant that can answer questions about your site’s content and capture leads.</p>
              <div className="mt-4 rounded-xl bg-black/40 p-4 border border-white/10">
                <p className="text-slate-300 text-sm">Ask: “What services does Liteweb provide?”</p>
                <div className="mt-3 text-slate-200 text-sm">AI: "We offer web design, hosting & maintenance, AI integrations, professional writing, and enterprise-grade solutions."</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Voice Agent</h3>
              <p className="mt-2 text-slate-300 text-sm">Hands-free customer support or intake using a voice interface with natural speech and CRM integration.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Search & Recommendations</h3>
              <p className="mt-2 text-slate-300 text-sm">AI-enhanced site search, product recommendations, and personalization to boost conversion.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Automations</h3>
              <p className="mt-2 text-slate-300 text-sm">Link your forms, spreadsheets, and tools with AI to triage leads, draft emails, and route tasks automatically.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
