/**
 * Skills data — single source of truth for the Skills section.
 * Each category has a title, an icon class (Boxicons / Unicons), and a list of skills.
 */

const skillsData = [
  {
    category: "IoT & Embedded",
    icon: "bx bx-chip",
    skills: ["ESP32", "Arduino", "STM32", "Sensor Integration"],
  },
  {
    category: "Languages",
    icon: "bx bx-code-alt",
    skills: ["C/C++", "Python", "Java", "Assembly (basic)"],
  },
  {
    category: "Backend & APIs",
    icon: "bx bx-server",
    skills: ["Spring Boot", "Node.js", "REST API Design"],
  },
  {
    category: "Frontend",
    icon: "bx bx-palette",
    skills: ["React", "HTML", "CSS", "Figma"],
  },
  {
    category: "Databases",
    icon: "bx bx-data",
    skills: ["MySQL", "PostgreSQL", "Relational & NoSQL Modeling"],
  },
  {
    category: "Tools & Cloud",
    icon: "bx bx-wrench",
    skills: [
      "Git / GitHub",
      "VS Code",
      "Arduino IDE",
      "AWS (basic)",
      "Vercel",
      "Azure",
      "Canva",
      "Postman",
    ],
  },
  {
    category: "Other",
    icon: "bx bx-group",
    skills: [
      "Problem Solving",
      "Agile Teamwork",
      "Project & Team Management",
      "Communication",
    ],
  },
];

export default skillsData;

