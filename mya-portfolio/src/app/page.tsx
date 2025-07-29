import Hero from "./_components/hero";
import Experience from "./_components/experience/experience";
import Projects from "./_components/projects/projects";
import Container from "./_components/container";
import About from "./_components/about/about";
import Footer from "./_components/footer";
import Preview from "./creative/preview";

export default function Home() {
  return (
    <main>
        <Hero></Hero>
        <div className="bg-gradient">
          <Container>
            <Experience></Experience>
            <Projects></Projects>
            <Preview></Preview>
            <About></About>
          </Container>
          <Footer></Footer>
        </div>
        
    </main>
  );
}
