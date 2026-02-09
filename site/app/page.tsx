import { Navbar, Footer } from "@/components/shared";
import { Hero, Features, Community } from "@/components/landing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-indigo-500/30">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
