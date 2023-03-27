import Footer from './components/Footer/Footer'
import "./global.css"
import Navbar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'

export default function Home() {
  return (
    <main>
      <title>Viajes</title>
      <Navbar />
      <Hero />
      <Section />
      <Footer />
    </main>
  )
}
