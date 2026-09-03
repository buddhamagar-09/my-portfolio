import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />

      <Hero />

      <About />

      <Skills />
      
      <Education />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <h1 className="text-5xl font-bold text-white">
          Buddha's Portfolio
        </h1>
      </section>
    </div>
  );
}

export default App;