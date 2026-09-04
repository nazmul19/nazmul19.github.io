export type Service = {
  slug: string;
  title: string;
  description: string;
  examples: string[];
};

export const services: Service[] = [
  {
    slug: "saas-development",
    title: "SaaS Development",
    description:
      "Design and build multi-tenant SaaS products and business platforms from idea to production — with clear architecture, secure access, and room to scale.",
    examples: [
      "Product MVPs and full SaaS platforms",
      "Subscription and billing-ready systems",
      "Admin portals and customer workspaces",
      "APIs and partner integrations",
      "Reporting and analytics modules",
    ],
  },
  {
    slug: "integration",
    title: "Integration",
    description:
      "Connect the systems your business already uses so data and workflows move reliably across CRM, ERP, calendars, messaging, and third-party APIs.",
    examples: [
      "CRM and ERP integration",
      "API and webhook orchestration",
      "Data synchronization pipelines",
      "Communication platform connectors",
      "Identity and access bridging",
    ],
  },
  {
    slug: "modernization",
    title: "Modernization",
    description:
      "Upgrade legacy applications and brittle processes into maintainable, modern architectures without disrupting the business along the way.",
    examples: [
      "Legacy application rebuilds",
      "Monolith to modular services",
      "UI and experience refreshes",
      "Performance and reliability upgrades",
      "Technical debt reduction",
    ],
  },
  {
    slug: "cloud",
    title: "Cloud",
    description:
      "Plan, migrate, and operate applications on the cloud with practical architecture, cost awareness, and delivery pipelines your team can own.",
    examples: [
      "Cloud architecture and landing zones",
      "Application migration",
      "CI/CD and infrastructure automation",
      "Observability and reliability setup",
      "Cost and environment optimization",
    ],
  },
  {
    slug: "dedicated-engineering",
    title: "Dedicated Engineering",
    description:
      "Embed experienced engineers with your product or IT team to accelerate delivery, improve quality, and keep ownership close to your business.",
    examples: [
      "Dedicated squads for product delivery",
      "Staff augmentation for critical projects",
      "Architecture and tech leadership support",
      "Ongoing feature development",
      "Knowledge transfer and documentation",
    ],
  },
];
