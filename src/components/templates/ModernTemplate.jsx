import { Mail, Phone, MapPin, Github, Linkedin, Globe, ArrowUpRight, Sparkles } from "lucide-react";

function Title({ eyebrow, children }) {
  return (
    <div className="mb-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand">{eyebrow}</p>
      <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground">{children}</h2>
    </div>
  );
}

export default function ModernTemplate({ data }) {
  const { personal, education, skills, projects, certifications, achievements, social } = data;

  return (
    <div className="bg-background text-foreground">
      <header id="home" className="relative overflow-hidden bg-gradient-brand px-8 py-14 text-primary-foreground">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent2/30 blur-3xl" />
        <div className="relative flex flex-wrap items-center gap-7">
          <img
            src={personal.photo}
            alt={personal.name}
            className="h-28 w-28 rounded-2xl object-cover shadow-lift ring-4 ring-primary-foreground/25"
          />
          <div className="min-w-[240px] flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-[11px] font-semibold">
              <Sparkles size={12} /> Open to internships &amp; full-time roles
            </span>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight">{personal.name}</h1>
            <p className="mt-1.5 text-sm opacity-90">{personal.title}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {[
                [Mail, personal.email],
                [Phone, personal.phone],
                [MapPin, personal.location],
              ].map(([Icon, text]) => (
                <span key={text} className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5">
                  <Icon size={12} /> {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="space-y-12 px-8 py-12">
        <section id="about">
          <Title eyebrow="About">A little about me</Title>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">{personal.bio}</p>
        </section>

        <section id="skills">
          <Title eyebrow="Skills">What I work with</Title>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.id} className="rounded-xl border border-border bg-surface p-4 shadow-soft transition-transform hover:-translate-y-0.5">
                <div className="flex justify-between text-sm font-semibold">
                  <span>{s.name}</span>
                  <span className="text-brand">{s.level}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-gradient-warm transition-all duration-500" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <Title eyebrow="Education">Where I studied</Title>
          <div className="space-y-4">
            {education.map((e) => (
              <article key={e.id} className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-bold">{e.degree}</h3>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {e.year}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-brand">{e.institution}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{e.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <Title eyebrow="Projects">Things I have built</Title>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.id}
                className="group rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-bold">{p.title}</h3>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title}`}
                    className="rounded-lg bg-secondary p-1.5 text-brand transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean)
                    .map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications">
          <Title eyebrow="Certifications">Certified in</Title>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <article key={c.id} className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                <p className="text-sm font-semibold">{c.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>
                <p className="mt-3 text-xs font-semibold text-brand">{c.date}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements">
          <Title eyebrow="Achievements">Proud moments</Title>
          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((a) => (
              <article key={a.id} className="rounded-2xl bg-secondary p-5">
                <p className="text-sm font-bold">{a.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{a.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="overflow-hidden rounded-3xl bg-gradient-brand p-9 text-center text-primary-foreground shadow-lift">
          <h2 className="font-display text-2xl font-bold">Let&apos;s work together</h2>
          <p className="mx-auto mt-2 max-w-md text-sm opacity-90">
            I am always up for interesting projects, internships and collaborations.
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            <Mail size={15} /> {personal.email}
          </a>
          <div className="mt-6 flex justify-center gap-3">
            {[
              [social.github, Github, "GitHub"],
              [social.linkedin, Linkedin, "LinkedIn"],
              [social.other, Globe, "Website"],
            ]
              .filter(([href]) => href)
              .map(([href, Icon, label]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-xl bg-primary-foreground/15 p-2.5 transition-colors hover:bg-primary-foreground/25"
                >
                  <Icon size={17} />
                </a>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
