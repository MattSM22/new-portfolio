import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans dot-grid">
      <Navbar />
      <Hero />
    </div>
  );
}
