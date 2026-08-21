import { Mail, Phone, MapPin, Github, Linkedin, Globe, ExternalLink } from "lucide-react";

function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-border pt-8">
      <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function MinimalTemplate({ data }) {
  const { personal, education, skills, projects, certifications, achievements, social } = data;

  return (
    <div className="bg-surface px-6 py-10 text-foreground sm:px-10">
      <div className="mx-auto max-w-2xl space-y-8">
        <header id="home" className="pb-2">
          <img
            src={personal.photo}
            alt={personal.name}
            className="h-20 w-20 rounded-full object-cover grayscale"
          />
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight">{personal.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{personal.title}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Mail size={13} /> {personal.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={13} /> {personal.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} /> {personal.location}
            </span>
          </div>
        </header>

        <Section id="about" title="About">
          <p className="text-sm leading-7 text-muted-foreground">{personal.bio}</p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s.id}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium"
              >
                {s.name} · {s.level}%
              </span>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="space-y-5">
            {education.map((e) => (
              <div key={e.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold">{e.degree}</p>
                  <p className="text-xs text-muted-foreground">{e.year}</p>
                </div>
                <p className="text-xs text-muted-foreground">{e.institution}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{e.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-5">
            {projects.map((p) => (
              <div key={p.id}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-brand"
                >
                  {p.title} <ExternalLink size={13} />
                </a>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{p.description}</p>
                <p className="mt-1 text-xs italic text-muted-foreground">{p.tech}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <ul className="space-y-2 text-sm">
            {certifications.map((c) => (
              <li key={c.id} className="flex flex-wrap justify-between gap-2">
                <span>
                  {c.name} <span className="text-muted-foreground">— {c.org}</span>
                </span>
                <span className="text-xs text-muted-foreground">{c.date}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="achievements" title="Achievements">
          <div className="space-y-4">
            {achievements.map((a) => (
              <div key={a.id}>
                <p className="text-sm font-semibold">{a.title}</p>
                <p className="text-sm leading-6 text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-sm text-muted-foreground">
            Reach me at{" "}
            <a href={`mailto:${personal.email}`} className="font-medium text-foreground underline">
              {personal.email}
            </a>
          </p>
          <div className="mt-4 flex gap-4 text-muted-foreground">
            {social.github && (
              <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground">
                <Github size={17} />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
                <Linkedin size={17} />
              </a>
            )}
            {social.other && (
              <a href={social.other} target="_blank" rel="noreferrer" aria-label="Website" className="hover:text-foreground">
                <Globe size={17} />
              </a>
            )}
          </div>
        </Section>
      </div>
    </div>
  );
}
