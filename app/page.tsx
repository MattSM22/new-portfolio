import About from "./components/About";
import Carrer from "./components/Carrer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans dot-grid">
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Carrer />
      <Contact />
      <Footer />
    </div>
  );
}
