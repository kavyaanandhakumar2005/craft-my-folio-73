import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FolioCraft — Build Your Professional Portfolio" },
      {
        name: "description",
        content:
          "FolioCraft helps students and freshers build a professional portfolio website in minutes with live preview and three ready-made templates.",
      },
      { property: "og:title", content: "FolioCraft — Build Your Professional Portfolio" },
      {
        property: "og:description",
        content:
          "Fill in your details, pick a template and watch your student portfolio come together in real time.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
