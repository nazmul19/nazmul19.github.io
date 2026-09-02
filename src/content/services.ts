export type Service = {
  slug: string;
  title: string;
  description: string;
  examples: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Build web applications and business platforms designed around your specific workflows and requirements.",
    examples: [
      "Internal business portals",
      "Management systems",
      "Operational platforms",
      "Customer-facing applications",
      "Reporting systems",
    ],
  },
  {
    slug: "ai-powered-applications",
    title: "AI-Powered Applications",
    description:
      "Add intelligence to your existing systems or build entirely new AI-powered experiences.",
    examples: [
      "AI assistants",
      "Intelligent search",
      "Document intelligence",
      "Knowledge systems",
      "Automated insights",
      "Recommendation systems",
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    description:
      "Build AI agents capable of understanding context, accessing business data, using tools, and assisting with complex workflows.",
    examples: [
      "Research agents",
      "Sales assistants",
      "RFP response assistants",
      "Knowledge assistants",
      "Workflow agents",
    ],
  },
  {
    slug: "automation",
    title: "Automation",
    description:
      "Reduce repetitive work and improve operational efficiency.",
    examples: [
      "Workflow automation",
      "WhatsApp automation",
      "Document processing",
      "Data synchronization",
      "Notification workflows",
      "Approval workflows",
    ],
  },
  {
    slug: "system-integration",
    title: "System Integration",
    description: "Connect the systems your business already uses.",
    examples: [
      "CRM integration",
      "ERP integration",
      "Calendar integration",
      "Communication platforms",
      "Third-party APIs",
      "Data synchronization",
    ],
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    description:
      "Build mobile applications for business operations, field teams, reporting, monitoring, and customer experiences.",
    examples: [
      "Field operations apps",
      "Reporting and monitoring",
      "Customer experience apps",
      "Operational mobile workflows",
    ],
  },
];
