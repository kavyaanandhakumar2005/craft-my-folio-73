import { Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
            <Layers size={16} />
          </span>
          <span className="font-display text-sm font-bold text-foreground">FolioCraft</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Portfolio builder for college students and freshers.
        </p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} FolioCraft</p>
      </div>
    </footer>
  );
}
