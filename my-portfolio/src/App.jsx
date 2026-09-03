import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />

      <Hero />

      <About />

      <Skills />
      
      <Education />

      <Projects />

      <Contact />
      
    </div>
  );
}

export default App;