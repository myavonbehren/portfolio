import Hero from "./ui/hero";
import Experience from "./ui/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero></Hero>
      <Experience></Experience>
    </main>
  );
}
