import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/ai', label: 'AI Integrations' },
  { to: '/writing', label: 'Writing' },
  { to: '/enterprise', label: 'Enterprise' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-violet-500 via-sky-400 to-amber-300 shadow-lg"></div>
            <span className="font-semibold text-white text-lg tracking-tight">Liteweb Design</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'} transition-colors`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="mailto:info@liteweb.my"
              className="ml-4 inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 text-sm hover:bg-white/20 transition"
            >
              Get a quote
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-2 py-2 rounded-md ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="mailto:info@liteweb.my"
                className="px-2 py-2 rounded-md bg-white/10 text-white text-center"
                onClick={() => setOpen(false)}
              >
                Get a quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
