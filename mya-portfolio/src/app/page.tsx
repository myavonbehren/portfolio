import Hero from "./_components/hero";
import Experience from "./_components/experience/experience";
import Projects from "./_components/projects/projects";
import About from "./_components/about/about";
import Footer from "./_components/footer";
import CreativeSection from "./_creative/creative-section";

export default function Home() {
  return (
    <main>
        <Hero></Hero>
            <Experience></Experience>
            <Projects></Projects>
            <CreativeSection></CreativeSection>
            <About></About>
          <Footer></Footer>
    </main>
  );
}
