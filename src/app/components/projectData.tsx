export interface ProjectOutcome {
  metric: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tags: string[];
  color: string;
  role: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  outcomes: ProjectOutcome[];
  coverImage: string;
}

export const projects: Project[] = [
  {
    id: "veterans",
    title: "Veterans Rehabilitation Platform",
    subtitle: "Helping 60,000 veterans navigate complex government services",
    category: "Gov-Tech",
    year: "2024",
    tags: ["UX Research", "Accessibility", "Information Architecture", "Service Design"],
    color: "#f5f4f0",
    role: "Lead Product Designer",
    duration: "8 months",
    overview:
      "A comprehensive redesign of the veterans rehabilitation portal — transforming a confusing government platform into a clear, scenario-based experience that guides veterans through their eligibility and services.",
    challenge:
      "Veterans faced a fragmented portal with scattered information, no clear pathways, and a system that assumed users already understood complex bureaucratic processes. Support call volume was extremely high.",
    solution:
      "A scenario-based classification system with clear visual hierarchy, personalized dashboards, and guided eligibility flows that meet veterans where they are in their journey.",
    outcomes: [
      { metric: "60,000+", label: "Veterans served" },
      { metric: "73%", label: "Fewer support calls" },
      { metric: "4.2/5", label: "User satisfaction" },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1690306815613-f839b74af330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1lZGljYWwlMjBkYXNoYm9hcmQlMjB1aSUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMzc5NTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "bank",
    title: "Israel Post Bank",
    subtitle: "Replacing 30-minute branch visits with 5-minute digital onboarding",
    category: "Fintech",
    year: "2024",
    tags: ["Onboarding", "Trust Design", "Regulatory", "Mobile-First"],
    color: "#f0f2f5",
    role: "Product Designer",
    duration: "6 months",
    overview:
      "Designing a fully digital account opening flow for Israel Post Bank — replacing human mediation with a self-service experience while maintaining regulatory compliance and user trust.",
    challenge:
      "Branch-based account opening required 30+ minutes of human mediation. The process was paper-heavy, clerk-dependent, and created long wait times for customers.",
    solution:
      "A mobile-first onboarding flow with progressive disclosure, clear progress indication, and trust-building elements integrated at every decision point.",
    outcomes: [
      { metric: "83%", label: "Digital completion rate" },
      { metric: "5 min", label: "Average flow time" },
      { metric: "40%", label: "Branch load reduction" },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1533234944761-2f5337579079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAzNzk1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "polisa",
    title: "Polisa Insurance",
    subtitle: "Modernizing the insurance purchase journey for digital natives",
    category: "Insurtech",
    year: "2024",
    tags: ["Complex Forms", "Conversion", "Mobile First", "Data Visualization"],
    color: "#e8f5e9",
    role: "Senior Product Designer",
    duration: "4 months",
    overview:
      "A complete overhaul of the quote-to-buy process for Polisa, focusing on reducing friction in data entry and presenting complex coverage options in an understandable, transparent way.",
    challenge:
      "Potential customers were abandoning the quote process due to overwhelming forms, unclear terminology, and a lack of immediate pricing feedback.",
    solution:
      "We introduced a conversational data entry flow, real-time price estimation, and visual comparison tools that help users understand exactly what they are paying for.",
    outcomes: [
      { metric: "2.5x", label: "Conversion rate" },
      { metric: "-40%", label: "Time to quote" },
      { metric: "90%", label: "Mobile completion" },
    ],
    coverImage:
      "https://images.unsplash.com/photo-1590935216595-f9fc9b65179d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGluc3VyYW5jZSUyMGFwcCUyMGludGVyZmFjZSUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMzgwNzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getNextProject(id: string): Project | undefined {
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}

export function getPrevProject(id: string): Project | undefined {
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return undefined;
  return projects[(index - 1 + projects.length) % projects.length];
}
