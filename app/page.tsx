import Hero from "@/components/hero";
import About from "@/components/about";
import Work from "@/components/work";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umut Bideci | Portfolio",
  description:
    "Hi, I'm Umut Bideci. A developer, high school student, and creative builder. Founder of Cliniscope, Electric Church, and co-founder of Abyss Games Studio.",
};

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Work />
      <Footer />
    </main>
  );
}
