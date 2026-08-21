export const initialPortfolio = {
  template: "modern",
  personal: {
    name: "Aarav Mehta",
    title: "Final Year CSE Student · Frontend Developer",
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&q=80",
    bio: "Computer Science undergraduate passionate about building clean, accessible web interfaces. I enjoy turning ideas into polished products and have shipped 6+ academic and freelance projects using React and modern JavaScript.",
    email: "aarav.mehta@example.com",
    phone: "+91 98765 43210",
    location: "Coimbatore, India",
  },
  education: [
    {
      id: "edu-1",
      degree: "B.E. Computer Science and Engineering",
      institution: "PSG College of Technology",
      year: "2022 - 2026",
      description: "CGPA 8.7/10. Coursework in Data Structures, DBMS, Operating Systems and Web Technologies.",
    },
    {
      id: "edu-2",
      degree: "Higher Secondary (CBSE)",
      institution: "Vidya Vikas Matric Hr. Sec. School",
      year: "2020 - 2022",
      description: "Scored 94% with Computer Science as the major elective.",
    },
  ],
  skills: [
    { id: "sk-1", name: "React", level: 88 },
    { id: "sk-2", name: "JavaScript (ES6+)", level: 85 },
    { id: "sk-3", name: "HTML & CSS", level: 92 },
    { id: "sk-4", name: "Node.js", level: 70 },
    { id: "sk-5", name: "Python", level: 75 },
    { id: "sk-6", name: "Git & GitHub", level: 80 },
  ],
  projects: [
    {
      id: "pr-1",
      title: "CampusConnect",
      description: "A student event discovery platform with club pages, RSVPs and a personalised feed. Used by 400+ students during the annual tech fest.",
      tech: "React, Vite, CSS Modules",
      link: "https://github.com/aaravmehta/campusconnect",
    },
    {
      id: "pr-2",
      title: "StudySprint",
      description: "Pomodoro-based study tracker with streaks, weekly analytics and offline support through local storage.",
      tech: "JavaScript, Chart.js, PWA",
      link: "https://github.com/aaravmehta/studysprint",
    },
    {
      id: "pr-3",
      title: "Resume Parser",
      description: "Rule-based parser that extracts skills and experience from PDF resumes and ranks them against a job description.",
      tech: "Python, Flask, Regex",
      link: "https://github.com/aaravmehta/resume-parser",
    },
  ],
  certifications: [
    { id: "ce-1", name: "Meta Front-End Developer", org: "Coursera", date: "Mar 2025" },
    { id: "ce-2", name: "Responsive Web Design", org: "freeCodeCamp", date: "Aug 2024" },
    { id: "ce-3", name: "Python for Everybody", org: "University of Michigan", date: "Jan 2024" },
  ],
  achievements: [
    {
      id: "ac-1",
      title: "Winner — Smart India Hackathon (Internal)",
      description: "Led a team of 4 to build an accessibility-first campus navigation app.",
    },
    {
      id: "ac-2",
      title: "Top 5% — CodeChef Long Challenge",
      description: "Consistent 3-star rating with 250+ problems solved across platforms.",
    },
  ],
  social: {
    github: "https://github.com/aaravmehta",
    linkedin: "https://linkedin.com/in/aaravmehta",
    other: "https://aaravmehta.dev",
  },
};

export const templates = [
  { id: "minimal", name: "Minimal", desc: "Typography-led, lots of whitespace" },
  { id: "professional", name: "Professional", desc: "Two-column, recruiter friendly" },
  { id: "modern", name: "Modern", desc: "Bold gradients and cards" },
];

export const uid = (prefix) => `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
