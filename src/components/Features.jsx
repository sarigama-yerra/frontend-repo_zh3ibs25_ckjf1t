import { Globe, Server, Shield, Bot, PenTool, Building2, Rocket, Headphones } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Globe, title: 'Web Design', desc: 'Clean, modern websites built on best practices. Responsive, SEO-friendly, and conversion-focused.' },
    { icon: Server, title: 'Hosting & Maintenance', desc: 'Fast, secure hosting with ongoing updates, backups, and proactive monitoring.' },
    { icon: Bot, title: 'AI Integrations', desc: 'Add AI chat, voice agents, and automations to your site and workflows.' },
    { icon: PenTool, title: 'Professional Writing', desc: 'On-brand copy that explains your value and drives action. Landing pages, blogs, and more.' },
    { icon: Building2, title: 'Enterprise Grade', desc: 'Security, reliability, and performance for teams that can’t compromise.' },
    { icon: Rocket, title: 'Launch & Growth', desc: 'Speedy delivery and ongoing iteration to help you grow.' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Everything you need to win online</h2>
        <p className="mt-4 text-slate-300 text-center max-w-2xl mx-auto">We combine thoughtful design with reliable infrastructure and practical AI to create websites that convert.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <Icon className="text-white/90" />
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
