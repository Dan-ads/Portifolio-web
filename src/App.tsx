import './styles/global.css'
import { Sidebar } from './components/layout/sidebar/sidebar'
import { Hero } from './components/layout/hero/hero'

export const App = () => {
  return (
    <div className="min-h-screen bg-[#000208] text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar/>
        <main className="shadow-[0_0_50px_rgba(59,130,246,0.25)] flex-1 p-200">
          <Hero />
        </main>
      </div>
    </div>
  )
}

