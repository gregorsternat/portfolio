export type Project = {
  name: string
  description: string
  role: string
  year: number
  href: string
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  description: string
  href?: string
}

export type Education = {
  institution: string
  degree: string
  period: string
  description: string
  href: string
}

export type StackGroup = {
  label: string
  items: readonly string[]
}

type PortfolioContent = {
  identity: {
    shortName: string
    fullName: string
  }
  introduction: readonly string[]
  experience: readonly Experience[]
  education: readonly Education[]
  stack: readonly StackGroup[]
  projects: readonly Project[]
  socialLinks: {
    github: string
    repositories: string
    linkedin: string
    twitter: string
  }
}

export const portfolioContent = {
  identity: {
    shortName: "gregor",
    fullName: "Gregor Sternat",
  },
  introduction: [
    "I'm Gregor, a fourth-year software engineering student at Epitech based in Paris.",
    "I have production experience across backend systems, cloud infrastructure, AI-powered applications, and full-stack development.",
    "I'm interested in scalable software architectures, reliable systems, and developer tooling.",
  ],
  experience: [
    {
      company: "Davai",
      role: "Full-stack Developer Intern",
      period: "Apr 2026 — Present",
      location: "Paris, France",
      description:
        "Design and ship end-to-end products across backend, frontend, mobile, and AWS cloud infrastructure, including AI-powered monitoring and internal automation platforms.",
      href: "https://davai.co/",
    },
    {
      company: "Kiln",
      role: "Back-end Developer Intern",
      period: "Sep 2025 — Feb 2026",
      location: "Paris, France",
      description:
        "Developed production Go services and real-time blockchain sentinels, optimizing distributed systems for performance, scalability, and reliability.",
      href: "https://www.kiln.fi/",
    },
    {
      company: "PoC Innovation",
      role: "R&D Engineer",
      period: "Apr 2024 — Sep 2025",
      location: "Île-de-France, France",
      description:
        "Designed and developed proof-of-concept web and blockchain applications with Next.js, Nuxt.js, Solidity, and Rust.",
      href: "https://poc-innovation.fr/",
    },
    {
      company: "Epitech",
      role: "Teaching Assistant (Astek / AER)",
      period: "Feb 2025 — Jul 2025",
      location: "Le Kremlin-Bicêtre, France",
      description:
        "Mentored students in software engineering fundamentals and best practices, including project reviews, debugging, and technical guidance.",
      href: "https://www.epitech.eu/",
    },
    {
      company: "Kiln",
      role: "Freelance Back-end Developer",
      period: "Jul 2024 — Dec 2024",
      location: "Paris, France",
      description:
        "Processed real-time blockchain events, contributed to production Go services, and participated in deployments and maintenance.",
      href: "https://www.kiln.fi/",
    },
  ],
  education: [
    {
      institution: "Epitech",
      degree: "Information Technology Expert Degree",
      period: "Oct 2023 — Jul 2028",
      description: "Software Engineering Curriculum",
      href: "https://www.epitech.eu/",
    },
  ],
  stack: [
    {
      label: "Languages",
      items: ["Go", "TypeScript", "Swift", "Python", "Rust", "C++", "C"],
    },
    {
      label: "Technologies",
      items: [
        "AWS",
        "AppKit",
        "Docker",
        "PostgreSQL",
        "Next.js",
        "Nuxt.js",
        "Expo (React Native)",
      ],
    },
  ],
  projects: [
    {
      name: "Keyglass",
      description:
        "A native, local-first macOS workspace that keeps developer secrets in Apple Keychain and makes them available through a signed CLI.",
      role: "Swift · SwiftUI · Apple Keychain",
      year: 2026,
      href: "https://keyglass.dev",
    },
    {
      name: "Raytracer",
      description:
        "A CPU-based ray tracer built in C++20, with configurable scenes and a plugin architecture for geometric primitives, materials, and lighting.",
      role: "C++20 · SFML",
      year: 2025,
      href: "https://github.com/gregorsternat/raytracer",
    },
  ],
  socialLinks: {
    github: "https://github.com/gregorsternat",
    repositories: "https://github.com/gregorsternat?tab=repositories",
    linkedin: "https://www.linkedin.com/in/gr%C3%A9gor-sternat-48895727a",
    twitter: "https://x.com/boubou1822_",
  },
} satisfies PortfolioContent
