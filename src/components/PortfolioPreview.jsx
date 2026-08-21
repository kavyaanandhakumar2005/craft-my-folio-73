import MinimalTemplate from "./templates/MinimalTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import ModernTemplate from "./templates/ModernTemplate";

const map = {
  minimal: MinimalTemplate,
  professional: ProfessionalTemplate,
  modern: ModernTemplate,
};

export default function PortfolioPreview({ data, device = "desktop" }) {
  const Template = map[data.template] || ModernTemplate;
  const widths = { desktop: "w-full", tablet: "w-full max-w-[820px]", mobile: "w-full max-w-[400px]" };

  return (
    <div className="flex justify-center">
      <div
        className={`${widths[device]} overflow-hidden rounded-2xl border border-border bg-surface shadow-lift transition-all duration-300`}
      >
        <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent2/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-soft/70" />
          <span className="ml-3 truncate rounded-md bg-surface px-2.5 py-1 text-[11px] text-muted-foreground">
            {(data.personal.name || "your-name").toLowerCase().replace(/\s+/g, "")}.dev
          </span>
        </div>
        <div className="max-h-[72vh] overflow-y-auto">
          <Template data={data} />
        </div>
      </div>
    </div>
  );
}
