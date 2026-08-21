const base =
  "w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-brand-soft focus:ring-2 focus:ring-ring/30";

export function Field({ label, children }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

export function Input({ label, ...props }) {
  return (
    <Field label={label}>
      <input className={base} {...props} />
    </Field>
  );
}

export function TextArea({ label, rows = 3, ...props }) {
  return (
    <Field label={label}>
      <textarea rows={rows} className={`${base} resize-y leading-relaxed`} {...props} />
    </Field>
  );
}

export function Button({ variant = "primary", className = "", ...props }) {
  const variants = {
    primary:
      "bg-gradient-brand text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
    soft: "bg-secondary text-secondary-foreground hover:bg-muted",
    ghost: "text-muted-foreground hover:bg-secondary hover:text-foreground",
    danger: "text-destructive hover:bg-destructive/10",
  };
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export function CardBlock({ title, onRemove, children }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4 shadow-soft transition-shadow hover:shadow-lift">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {onRemove && (
          <button
            onClick={onRemove}
            className="rounded-md px-2 py-1 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/10"
          >
            Remove
          </button>
        )}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
