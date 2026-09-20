import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans dot-grid">
      <Navbar />
      <Hero />
      <About />
      <Tools />
    </div>
  );
}
