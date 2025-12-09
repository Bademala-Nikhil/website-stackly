
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <About />

      <Services />

      <Contact />

    </div>
    
  );
}