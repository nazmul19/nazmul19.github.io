export type Project = {
  slug: string;
  title: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  techCategories: string[];
  value: string;
  extras?: { label: string; items: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "ai-powered-companion-for-leadership",
    title: "AI-Powered Companion for Leadership",
    challenge:
      "Business and customer information is often distributed across CRM systems, calendars, emails, and meeting conversations. Leadership teams need a unified understanding of accounts, activities, discussions, opportunities, and required next actions.",
    solution:
      "Built an AI-powered companion application that connects multiple business systems and transforms fragmented information into actionable intelligence.",
    capabilities: [
      "Unified business context",
      "Meeting intelligence",
      "AI-generated insights",
      "Activity tracking",
      "Context-aware summaries",
      "Recommended next actions",
      "Leadership dashboards",
    ],
    techCategories: [
      "AI Applications",
      "System Integration",
      "CRM",
      "Dashboards",
    ],
    value:
      "Help decision-makers move from scattered information to actionable insights and better next-step visibility.",
    extras: [
      {
        label: "Integrated Systems",
        items: [
          "Microsoft Dynamics CRM",
          "HubSpot CRM",
          "Zoho CRM",
          "ERPNext",
          "Attio CRM",
          "Microsoft Outlook Calendar",
          "Google Calendar",
          "Microsoft Teams Meeting Transcripts",
          "Google Meet Transcripts",
        ],
      },
    ],
  },
  {
    slug: "geofencing-site-monitoring-platform",
    title: "Geofencing & Site Monitoring Platform",
    challenge:
      "Organizations with physical sites and field operations need better visibility into location-based activities, incidents, and site events.",
    solution:
      "Built a web and mobile application using geofencing technology for monitoring site activity and reporting incidents.",
    capabilities: [
      "Geofencing",
      "Mobile application",
      "Location-aware monitoring",
      "Site surveillance workflows",
      "Incident reporting",
      "Web-based management portal",
      "Operational visibility",
    ],
    techCategories: ["Mobile Applications", "Web Applications", "Automation"],
    value:
      "Improves monitoring and enables faster reporting and response to incidents.",
  },
  {
    slug: "it-asset-management-network-discovery",
    title: "IT Asset Management & Network Discovery Platform",
    challenge:
      "Organizations often struggle to maintain an accurate view of IT assets distributed across employees, offices, and networks.",
    solution:
      "Built an IT asset management platform combined with automated device and network discovery capabilities.",
    capabilities: [
      "Centralized asset inventory",
      "Automated discovery workflows",
      "Device and network visibility",
      "Operational tracking",
    ],
    techCategories: [
      "Web Applications",
      "System Integration",
      "Automation",
      "Dashboards",
    ],
    value:
      "Provides a centralized view of IT assets while reducing manual inventory and discovery work.",
    extras: [
      {
        label: "Managed Assets",
        items: [
          "Laptops",
          "Desktops",
          "Printers",
          "Monitors",
          "Keyboards",
          "Mice",
          "Other IT equipment",
        ],
      },
      {
        label: "Discovery & Integration",
        items: [
          "OSQuery-based device information",
          "Nmap-based network discovery",
          "SNMP-based discovery",
          "Agentless monitoring approaches",
          "Fleet management integration",
          "Netdisco integration",
        ],
      },
    ],
  },
  {
    slug: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    challenge:
      "Leadership teams need a clear and timely understanding of sales performance.",
    solution:
      "Built a centralized sales performance dashboard that transforms business data into actionable visibility.",
    capabilities: [
      "Sales performance tracking",
      "Leadership dashboards",
      "KPI monitoring",
      "Performance comparison",
      "Trend analysis",
      "Business reporting",
    ],
    techCategories: ["Dashboards", "Business Reporting", "Analytics"],
    value:
      "Helps leadership teams understand performance and identify areas requiring attention.",
  },
  {
    slug: "gst-accumulation-management-portal",
    title: "GST Accumulation Management Portal",
    challenge:
      "Managing and tracking GST-related accumulation data can involve complex calculations and manual processes.",
    solution:
      "Developed a centralized web portal to manage, track, and organize GST accumulation information.",
    capabilities: [
      "Centralized data management",
      "Calculation workflows",
      "Reporting",
      "Data tracking",
      "Operational visibility",
    ],
    techCategories: ["Web Applications", "Business Portals", "Reporting"],
    value:
      "Reduces manual effort and improves access to structured financial information.",
  },
  {
    slug: "ai-rfp-evaluation-response",
    title: "AI-Powered RFP Evaluation & Response Generation",
    challenge:
      "Reviewing RFP documents and preparing responses can require significant manual effort and domain knowledge.",
    solution:
      "Built an Agentic RAG-based system that helps analyze RFP documents, retrieve relevant organizational knowledge, and assist in generating responses.",
    capabilities: [
      "RFP document analysis",
      "Knowledge retrieval",
      "Agentic workflows",
      "Context-aware generation",
      "Response assistance",
      "Evaluation support",
    ],
    techCategories: ["AI Agents", "Agentic RAG", "Document Intelligence"],
    value:
      "Helps teams reduce the effort required to analyze complex RFPs and prepare initial responses.",
  },
  {
    slug: "business-website-whatsapp-automation",
    title: "Business Website & WhatsApp Automation",
    challenge:
      "Small businesses often need an online presence and a better way to engage with customer inquiries.",
    solution:
      "Build modern business websites combined with WhatsApp-based automation workflows.",
    capabilities: [
      "Business website development",
      "Lead capture",
      "Inquiry management",
      "WhatsApp automation",
      "Automated responses",
      "Customer engagement workflows",
    ],
    techCategories: [
      "Web Applications",
      "WhatsApp Automation",
      "Lead Capture",
    ],
    value:
      "Helps businesses establish a professional digital presence and reduce manual communication work.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
