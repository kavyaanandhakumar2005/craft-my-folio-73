import { Input } from "../Field";

export default function SocialLinksForm({ data, onChange }) {
  const set = (key) => (e) => onChange({ ...data, [key]: e.target.value });

  return (
    <div className="space-y-4">
      <Input label="GitHub" value={data.github} onChange={set("github")} placeholder="https://github.com/username" />
      <Input
        label="LinkedIn"
        value={data.linkedin}
        onChange={set("linkedin")}
        placeholder="https://linkedin.com/in/username"
      />
      <Input
        label="Other link (portfolio, blog, Behance...)"
        value={data.other}
        onChange={set("other")}
        placeholder="https://yoursite.dev"
      />
    </div>
  );
}
