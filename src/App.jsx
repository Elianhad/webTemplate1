import { useState } from 'react'
import Navegacion from './components/Navegacion'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Contacto from './components/Contacto'

function App() {

  return (
    <div>
      <Navegacion/>
      <Hero/>
      <Features/>
      <Contacto/>
      <Footer/>
     
    </div>
  )
}

export default App
