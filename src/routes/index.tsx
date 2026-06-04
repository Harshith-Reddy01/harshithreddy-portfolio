import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Education,
  AssistantSection,
  ResumeSection,
  Contact,
  Footer,
  ScrollTop,
} from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harshith Reddy Taduri — AI/ML Engineer & Data Scientist" },
      {
        name: "description",
        content:
          "Portfolio of Harshith Reddy Taduri — AI/ML Engineer, Data Scientist, and Software Developer. Projects in deep learning, computer vision, and data analytics.",
      },
      { property: "og:title", content: "Harshith Reddy Taduri — AI/ML Engineer" },
      {
        property: "og:description",
        content: "AI/ML, Data Science, and Software Engineering portfolio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <AssistantSection />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
