import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  LayoutTemplate,
  MonitorSmartphone,
  Wand2,
  FileEdit,
  Palette,
  Rocket,
} from "lucide-react";
import { templates } from "../lib/portfolioData";

const features = [
  {
    icon: FileEdit,
    title: "Guided editor",
    text: "Simple forms for education, skills, projects, certifications and achievements — no design skills needed.",
  },
  {
    icon: Wand2,
    title: "Instant live preview",
    text: "Every keystroke updates the portfolio next to you. No refresh, no waiting, no surprises.",
  },
  {
    icon: LayoutTemplate,
    title: "Three templates",
    text: "Switch between Minimal, Professional and Modern layouts and keep all of your content intact.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive by default",
    text: "Your portfolio looks sharp on phones, tablets and recruiter laptops alike.",
  },
];

const steps = [
  { icon: FileEdit, title: "Add your details", text: "Start from realistic sample data and replace it with your own." },
  { icon: Palette, title: "Pick a template", text: "Compare three designs side by side in one click." },
  { icon: Rocket, title: "Share your portfolio", text: "Preview across devices and show it off to recruiters." },
];

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-brand-soft/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-accent2/20 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-2">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft">
              <Sparkles size={14} className="text-accent2" />
              Made for students &amp; freshers
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Build Your <span className="text-gradient-brand">Professional Portfolio</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Turn your college projects, skills and certifications into a polished portfolio
              website. Fill in a friendly editor on the left, watch your live portfolio build
              itself on the right.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/builder"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Create My Portfolio <ArrowRight size={16} />
              </Link>
              <a
                href="#templates"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft"
              >
                See templates
              </a>
            </div>

            <dl className="mt-10 flex flex-wrap gap-8">
              {[
                ["3", "Templates"],
                ["8", "Portfolio sections"],
                ["0s", "Preview delay"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-bold text-foreground">{value}</dt>
                  <dd className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-rise [animation-delay:120ms]">
            <div className="animate-floaty rounded-3xl border border-border bg-surface p-4 shadow-lift">
              <div className="mb-3 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent2/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-soft/70" />
              </div>
              <div className="grid gap-3 sm:grid-cols-[1fr_1.15fr]">
                <div className="space-y-2.5 rounded-2xl bg-muted/60 p-3.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Editor
                  </p>
                  {["Full name", "Professional title", "About you", "Skills"].map((f, i) => (
                    <div key={f} className="rounded-lg bg-surface p-2.5 shadow-soft">
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{f}</p>
                      <div
                        className="mt-1.5 h-2 rounded-full bg-gradient-brand opacity-70"
                        style={{ width: `${85 - i * 14}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <div className="bg-gradient-brand p-5 text-primary-foreground">
                    <p className="font-display text-lg font-bold">Aarav Mehta</p>
                    <p className="text-xs opacity-85">Frontend Developer · CSE 2026</p>
                  </div>
                  <div className="space-y-3 bg-surface p-4">
                    {["React", "JavaScript", "CSS"].map((s, i) => (
                      <div key={s}>
                        <p className="mb-1 text-[11px] font-semibold text-foreground">{s}</p>
                        <div className="h-1.5 rounded-full bg-muted">
                          <div
                            className="h-1.5 rounded-full bg-gradient-warm"
                            style={{ width: `${88 - i * 9}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="rounded-lg bg-muted/70 p-2.5">
                      <p className="text-[11px] font-semibold text-foreground">CampusConnect</p>
                      <p className="text-[10px] text-muted-foreground">React · Vite · CSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-border bg-surface/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything a fresher portfolio needs
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Focus on what you have built — the layout, spacing and typography are handled for you.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="templates" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Three templates, one click apart
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Your content stays the same while the design changes instantly in the live preview.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {templates.map((t, i) => (
              <article
                key={t.id}
                className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div
                  className={`h-36 ${
                    i === 0
                      ? "bg-muted"
                      : i === 1
                        ? "bg-secondary"
                        : "bg-gradient-brand"
                  } flex items-end p-5`}
                >
                  <span
                    className={`font-display text-xl font-bold ${
                      i === 2 ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {t.name}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                  <Link
                    to="/builder"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-transform hover:translate-x-0.5"
                  >
                    Try this template <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="border-t border-border bg-surface/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready in three steps
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <article key={title} className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-warm text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </span>
                  <Icon size={18} className="text-brand" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center shadow-lift">
            <h3 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
              Your portfolio is 10 minutes away
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85">
              Start from sample student data, swap in your own details and pick the design that
              feels like you.
            </p>
            <Link
              to="/builder"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5"
            >
              Create My Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
