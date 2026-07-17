export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  iconName: "Cpu" | "CircuitBoard" | "Bot" | "GraduationCap";
  coreCapabilities: string[];
}

export const services: Service[] = [
  {
    id: "industrial-automation",
    title: "Industrial Automation Training",
    shortDescription:
      "Hands-on training in industrial automation technologies for students and professionals.",
    iconName: "Cpu",
    coreCapabilities: [
      "PLC Programming & Troubleshooting",
      "SCADA & HMI Development",
      "Industrial Automation Systems"
    ]
  },
  {
    id: "embedded-iot",
    title: "Embedded Systems & IoT",
    shortDescription:
      "Practical courses in embedded programming and smart connected devices.",
    iconName: "CircuitBoard",
    coreCapabilities: [
      "Arduino Programming",
      "ESP32 & IoT Applications",
      "Sensor Integration & Data Acquisition"
    ]
  },
  {
    id: "robotics-mechatronics",
    title: "Robotics & Mechatronics",
    shortDescription:
      "Develop practical skills in robotics, mechatronics, and intelligent control systems.",
    iconName: "Bot",
    coreCapabilities: [
      "Robot Design & Programming",
      "Motor Control Systems",
      "Automation Project Development"
    ]
  },
  {
    id: "professional-development",
    title: "Professional Development",
    shortDescription:
      "Industry-focused training programs that prepare learners for automation careers.",
    iconName: "GraduationCap",
    coreCapabilities: [
      "Hands-on Laboratory Sessions",
      "Industry Certification Preparation",
      "Capstone Projects & Career Mentorship"
    ]
  }
];
