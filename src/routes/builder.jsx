import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Tablet, Smartphone, Eye } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioEditor from "../components/PortfolioEditor";
import PortfolioPreview from "../components/PortfolioPreview";
import { initialPortfolio } from "../lib/portfolioData";

export const Route = createFileRoute("/builder")({
  head: () => ({
    meta: [
      { title: "Portfolio Editor & Live Preview — FolioCraft" },
      {
        name: "description",
        content:
          "Edit your personal info, education, skills, projects, certifications and achievements while a live portfolio preview updates instantly.",
      },
      { property: "og:title", content: "Portfolio Editor & Live Preview — FolioCraft" },
      {
        property: "og:description",
        content: "Build a student portfolio in real time and switch between three templates.",
      },
    ],
  }),
  component: Builder,
});

const devices = [
  { id: "desktop", icon: Monitor, label: "Desktop" },
  { id: "tablet", icon: Tablet, label: "Tablet" },
  { id: "mobile", icon: Smartphone, label: "Mobile" },
];

function Builder() {
  const [data, setData] = useState(initialPortfolio);
  const [device, setDevice] = useState("desktop");

  const update = (key, value) => setData((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6">
        <div className="mb-6">
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Portfolio Builder
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Edit on the left — your portfolio updates instantly on the right.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,480px)_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-1">
            <PortfolioEditor
              data={data}
              update={update}
              onReset={() => setData(initialPortfolio)}
            />
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-soft">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <Eye size={16} className="text-brand" /> Live preview
              </p>
              <div className="flex gap-1 rounded-lg bg-secondary p-1">
                {devices.map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => setDevice(id)}
                    aria-label={label}
                    className={`rounded-md p-1.5 transition-all ${
                      device === id
                        ? "bg-surface text-brand shadow-soft"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>

            <PortfolioPreview data={data} device={device} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
