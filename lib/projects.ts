export interface Project {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  liveUrl: string;
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: "elevate-value-partners",
    title: "Elevate Value Partners",
    description: "Software startup delivering custom enterprise software, internal systems, AI integration, cybersecurity, and data analytics solutions.",
    screenshot: "/images/projects/elevate-value-partners.jpg",
    liveUrl: "https://elevatevaluepartners.co.zw",
    githubUrl: "",
  },
  {
    id: "muzinda",
    title: "MUZINDA",
    description: "Connecting people with quality accommodation.",
    screenshot: "/images/projects/muzinda.jpg",
    liveUrl: "https://muzinda.vercel.app",
    githubUrl: "https://github.com/ridellsalema/muzindanew",
  },
  {
    id: "vinefields-group-of-schools",
    title: "Vinefields Group of Schools Website",
    description: "School management website with parent notifications, an information portal, and administrative tools.",
    screenshot: "/images/projects/vinefields-group-of-schools.jpg",
    liveUrl: "https://vinefields.vercel.app",
    githubUrl: "",
  },
  {
    id: "beat-trill-entertainment",
    title: "Beat-Trill Entertainment",
    description: "Professional audio equipment rental website with client invoicing, schedule planning, and internal client management system.",
    screenshot: "/images/projects/beattrill-entertainment.jpg",
    liveUrl: "https://beattrill.xyz",
    githubUrl: "",
  },
  {
    id: "hivu-restaurant",
    title: "Hivu Restaurant",
    description: "Outdoor bistro and restaurant website with a simple online booking system.",
    screenshot: "/images/projects/hivu-restaurant.jpg",
    liveUrl: "https://hivu.vercel.app",
    githubUrl: "",
  },
  {
    id: "cost-timbers",
    title: "Cost Timbers",
    description: "Simple timber and Furniture Manufacturer website.",
    screenshot: "/images/projects/cost-timbers.jpg",
    liveUrl: "https://costtimbers.vercel.app/",
    githubUrl: "",
  },
];
