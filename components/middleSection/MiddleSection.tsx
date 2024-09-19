import Hero from "./Hero"
import Navbar from "./Navbar"
import About from "./About"
import Projects from "./Projects"
import Experience from "./Experience"
import Contact from "./Contact"
import Footer from "./Footer"

export default function MiddleSection() {
  return (
    <div className="h-full w-[84%] relative overflow-y-auto no-scrollbar flex flex-col gap-[10rem]">
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