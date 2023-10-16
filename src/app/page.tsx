import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <div className="-z-10">
        <div >
          <Header />
        </div>
        <div id="hero" >
          <Hero />
        </div>
        <div id="about" >
          <About />
        </div>
        <div id="skills" >
          <Skills />
        </div>
        <div id="projects" >
          <Projects />
        </div>
        <div id="contact" >
          <Contact />
        </div>
      </div>
    </div>
  )
}
