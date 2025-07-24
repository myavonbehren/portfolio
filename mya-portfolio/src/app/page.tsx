import Hero from "./ui/hero";
import Experience from "./ui/experience";
import Projects from "./ui/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero></Hero>
      <div className="bg-gradient">
        <Experience></Experience><Projects></Projects>
      </div>
    </main>
  );
}
