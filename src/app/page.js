import Footer from './components/Footer/Footer'
import "./global.css"
import Navbar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Blog from './components/Blog/Blog'

export default function Home() {
  return (
    <main>
      <title>Viajes</title>
      <Navbar />
      <Hero />
      <Section />
      <Blog />
      <Footer />
    </main>
  )
}
