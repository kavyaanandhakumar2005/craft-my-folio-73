import { Link } from "@tanstack/react-router";
import { Layers, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-soft">
            <Layers size={18} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Folio<span className="text-gradient-brand">Craft</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="/#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="/#templates" className="transition-colors hover:text-foreground">
            Templates
          </a>
          <a href="/#steps" className="transition-colors hover:text-foreground">
            How it works
          </a>
        </div>

        <Link
          to="/builder"
          className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
        >
          Open Builder <ArrowRight size={15} />
        </Link>
      </nav>
    </header>
  );
}
