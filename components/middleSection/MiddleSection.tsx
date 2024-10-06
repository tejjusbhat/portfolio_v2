import Hero from "./Hero"
import Navbar from "./Navbar"
import About from "./About"
import Projects from "./Projects"
import Experience from "./Experience"
import Contact from "./Contact"
import Footer from "./Footer"

export default function MiddleSection() {
  return (
    <div className="relative overflow-y-auto no-scrollbar flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}