import Home from './pages/Home'
import Services from './pages/Services'
import AI from './pages/AI'
import Writing from './pages/Writing'
import Enterprise from './pages/Enterprise'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
