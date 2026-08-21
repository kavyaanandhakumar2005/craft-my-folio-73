import { Mail, Phone, MapPin, Github, Linkedin, Globe, GraduationCap, Award, Trophy, FolderGit2 } from "lucide-react";

function Heading({ icon: Icon, children }) {
  return (
    <h2 className="mb-4 flex items-center gap-2 border-b-2 border-brand/25 pb-2 font-display text-base font-bold uppercase tracking-wide text-foreground">
      <Icon size={16} className="text-brand" /> {children}
    </h2>
  );
}

export default function ProfessionalTemplate({ data }) {
  const { personal, education, skills, projects, certifications, achievements, social } = data;

  return (
    <div className="bg-surface text-foreground">
      <header id="home" className="border-b border-border bg-secondary px-8 py-9">
        <div className="flex flex-wrap items-center gap-6">
          <img
            src={personal.photo}
            alt={personal.name}
            className="h-24 w-24 rounded-xl object-cover shadow-soft"
          />
          <div className="min-w-[220px] flex-1">
            <h1 className="font-display text-3xl font-bold tracking-tight">{personal.name}</h1>
            <p className="mt-1 text-sm font-medium text-brand">{personal.title}</p>
            <div className="mt-3 grid gap-1.5 text-xs text-muted-foreground sm:grid-cols-2">
              <span className="inline-flex items-center gap-1.5"><Mail size={13} /> {personal.email}</span>
              <span className="inline-flex items-center gap-1.5"><Phone size={13} /> {personal.phone}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> {personal.location}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-8 px-8 py-8 lg:grid-cols-[1.6fr_1fr]">
        <main className="space-y-9">
          <section id="about">
            <Heading icon={Globe}>Profile</Heading>
            <p className="text-sm leading-7 text-muted-foreground">{personal.bio}</p>
          </section>

          <section id="education">
            <Heading icon={GraduationCap}>Education</Heading>
            <div className="space-y-5">
              {education.map((e) => (
                <div key={e.id} className="border-l-2 border-border pl-4">
                  <p className="text-sm font-semibold">{e.degree}</p>
                  <p className="text-xs font-medium text-brand">
                    {e.institution} · {e.year}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{e.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="projects">
            <Heading icon={FolderGit2}>Projects</Heading>
            <div className="space-y-4">
              {projects.map((p) => (
                <article key={p.id} className="rounded-lg border border-border p-4 transition-shadow hover:shadow-soft">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-xs font-medium text-brand hover:underline">
                      View project
                    </a>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{p.description}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">{p.tech}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="achievements">
            <Heading icon={Trophy}>Achievements</Heading>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li key={a.id} className="text-sm">
                  <p className="font-semibold">{a.title}</p>
                  <p className="leading-6 text-muted-foreground">{a.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <aside className="space-y-9">
          <section id="skills">
            <Heading icon={Award}>Skills</Heading>
            <div className="space-y-3">
              {skills.map((s) => (
                <div key={s.id}>
                  <div className="flex justify-between text-xs font-medium">
                    <span>{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-muted">
                    <div
                      className="h-1.5 rounded-full bg-brand transition-all duration-500"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications">
            <Heading icon={Award}>Certifications</Heading>
            <ul className="space-y-3 text-sm">
              {certifications.map((c) => (
                <li key={c.id} className="rounded-lg bg-secondary p-3">
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {c.org} · {c.date}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section id="contact">
            <Heading icon={Mail}>Contact</Heading>
            <div className="space-y-2 text-sm">
              <a href={`mailto:${personal.email}`} className="block text-muted-foreground hover:text-brand">
                {personal.email}
              </a>
              {social.github && (
                <a href={social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-brand">
                  <Github size={15} /> GitHub
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-brand">
                  <Linkedin size={15} /> LinkedIn
                </a>
              )}
              {social.other && (
                <a href={social.other} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-brand">
                  <Globe size={15} /> Website
                </a>
              )}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
