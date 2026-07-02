export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: "Building" | "HardHat" | "Truck" | "Ruler"; 
  coreCapabilities: string[];
}

export const services: Service[] = [
  {
    id: "civil-structural",
    title: "Civil & Structural Works",
    shortDescription: "End-to-end development for commercial and industrial facilities.",
    iconName: "Building",
    coreCapabilities: [
      "Deep Foundation Engineering",
      "Reinforced Concrete Structures",
      "Structural Integrity Assessments"
    ]
  },
  {
    id: "site-management",
    title: "Comprehensive Site Management",
    shortDescription: "Expert oversight to ensure zero delays and maximum compliance.",
    iconName: "HardHat",
    coreCapabilities: [
      "HSE Protocol Enforcement",
      "Sub-contractor Coordination",
      "Timeline & Resource Optimization"
    ]
  },
  {
    id: "heavy-procurement",
    title: "Logistics & Procurement",
    shortDescription: "Strategic sourcing of industrial-grade construction materials.",
    iconName: "Truck",
    coreCapabilities: [
      "Heavy Machinery Deployment",
      "Material Quality Verification",
      "Supply Chain Optimization"
    ]
  }
];
