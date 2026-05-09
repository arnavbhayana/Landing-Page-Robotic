import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Products from './components/Products'
import Specs from './components/Specs'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { useState } from 'react'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="text-gray-100">
      <Navbar onRequestDemo={() => setModalOpen(true)} />
      <Hero />
      <Ticker />
      <Products />
      <Specs />
      <Industries />
      <Contact onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
