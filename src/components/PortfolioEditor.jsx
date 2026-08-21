import { useState } from "react";
import {
  User,
  GraduationCap,
  Wrench,
  FolderGit2,
  Award,
  Trophy,
  Link2,
  RotateCcw,
} from "lucide-react";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import ProjectsForm from "./forms/ProjectsForm";
import CertificationsForm from "./forms/CertificationsForm";
import AchievementsForm from "./forms/AchievementsForm";
import SocialLinksForm from "./forms/SocialLinksForm";
import TemplateSelector from "./TemplateSelector";

const tabs = [
  { id: "personal", label: "Personal", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "certifications", label: "Certificates", icon: Award },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "social", label: "Links", icon: Link2 },
];

export default function PortfolioEditor({ data, update, onReset }) {
  const [tab, setTab] = useState("personal");

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-base font-bold text-foreground">Choose a template</h2>
            <p className="text-xs text-muted-foreground">Switch anytime — your content stays.</p>
          </div>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <RotateCcw size={13} /> Reset
          </button>
        </div>
        <TemplateSelector value={data.template} onChange={(t) => update("template", t)} />
      </div>

      <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
        <div className="-mx-1 mb-5 flex gap-1.5 overflow-x-auto px-1 pb-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                tab === id
                  ? "bg-gradient-brand text-primary-foreground shadow-soft"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>

        <div key={tab} className="animate-rise">
          {tab === "personal" && (
            <PersonalInfoForm data={data.personal} onChange={(v) => update("personal", v)} />
          )}
          {tab === "education" && (
            <EducationForm items={data.education} onChange={(v) => update("education", v)} />
          )}
          {tab === "skills" && <SkillsForm items={data.skills} onChange={(v) => update("skills", v)} />}
          {tab === "projects" && (
            <ProjectsForm items={data.projects} onChange={(v) => update("projects", v)} />
          )}
          {tab === "certifications" && (
            <CertificationsForm
              items={data.certifications}
              onChange={(v) => update("certifications", v)}
            />
          )}
          {tab === "achievements" && (
            <AchievementsForm items={data.achievements} onChange={(v) => update("achievements", v)} />
          )}
          {tab === "social" && <SocialLinksForm data={data.social} onChange={(v) => update("social", v)} />}
        </div>
      </div>
    </div>
  );
}
