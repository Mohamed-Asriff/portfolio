/**
 * Projects data — single source of truth for the Portfolio section.
 * Each project carries one or more `categories` used by the filter tabs.
 *
 * Categories used in the UI:
 *   "All"              – shows everything (handled in Works.jsx)
 *   "IoT & Embedded"   – hardware / microcontroller projects
 *   "Full-Stack"       – web-app / backend projects
 *   "UI/UX"            – design-only projects
 */

export const projectsData = [
  /* ───────── IoT & Embedded ───────── */
  {
    id: 1,
    title: "IoT-Based Waste Management & Monitoring System",
    description:
      "Ultrasonic sensors measure bin fill levels; ESP32 sends data over HTTP REST. Spring Boot backend stores data in PostgreSQL; React dashboard shows bin status.",
    tags: ["C++", "ESP32", "Spring Boot", "PostgreSQL", "React"],
    categories: ["IoT & Embedded", "Full-Stack"],
    github: "https://github.com/Mohamed-Asriff/smart-waste-bin-iot.git",
  },
  {
    id: 2,
    title: "Transport Container Security & Tracking System",
    description:
      "RFID-based electronic lock/unlock, GPS tracking with GSM SMS notifications, MPU6050 tamper detection, and LDR light-exposure alerts.",
    tags: ["C++", "RFID", "GPS", "GSM"],
    categories: ["IoT & Embedded"],
    github: "https://github.com/Mohamed-Asriff/Transport-container.git",
  },
  {
    id: 3,
    title: "Smart Medicine Container",
    description:
      "RFID authentication with servo-based locking/unlocking, DHT22 temperature & humidity monitoring, and OLED status display.",
    tags: ["C++", "RFID", "DHT22", "OLED"],
    categories: ["IoT & Embedded"],
    github: "https://github.com/Mohamed-Asriff/smart-medicine-storage-box.git",
  },
  {
    id: 4,
    title: "Autonomous Line Following Robot",
    description:
      "IR sensors detect line position; motor-driver logic for accurate navigation. Finalist at Vertex robotic challenge (University of Moratuwa).",
    tags: ["C++", "IR Sensors", "Motor Driver"],
    categories: ["IoT & Embedded"],
    github: "https://github.com/Mohamed-Asriff/Line-Follower.git",
  },
  {
    id: 5,
    title: "Bluetooth-Controlled Robotic Car",
    description:
      "Smartphone control via Bluetooth module; forward/backward/left/right motor control through a motor driver and DC motors.",
    tags: ["C++", "Bluetooth", "Motor Driver"],
    categories: ["IoT & Embedded"],
    github: "https://github.com/Mohamed-Asriff/Bluetooth-car.git",
  },

  /* ───────── Full-Stack ───────── */
  {
    id: 6,
    title: "Feedback Analytics Module",
    description:
      "Go REST backend that processes and aggregates feedback data, with a responsive Vue.js dashboard.",
    tags: ["Vue.js", "Go", "REST API"],
    categories: ["Full-Stack"],
    github: "https://github.com/Mohamed-Asriff/Feedback-module-.git",
  },
  {
    id: 7,
    title: "E-Commerce Site",
    description:
      "Product browsing, cart management, REST-style API integration, async data fetching with error/loading states.",
    tags: ["React", "JavaScript"],
    categories: ["Full-Stack"],
    github: "https://github.com/Mohamed-Asriff/E-commerce-site.git",
  },
  {
    id: 8,
    title: "Event Management System (Spring Boot)",
    description:
      "REST APIs, MVC structure, relational data models, full CRUD operations.",
    tags: ["Spring Boot", "Java"],
    categories: ["Full-Stack"],
    github:
      "https://github.com/Mohamed-Asriff/event-Management-backend_Springboot.git",
  },
  {
    id: 9,
    title: "Pharmacy Management System",
    description:
      "Inventory, supplier and transaction records, CRUD workflows.",
    tags: ["PHP", "MySQL"],
    categories: ["Full-Stack"],
    github:
      "https://github.com/Mohamed-Asriff/Pharmacy-Management-System.git",
  },
  {
    id: 10,
    title: "Event Management System (PHP)",
    description:
      "Events, registrations and user data management; designed in Figma first.",
    tags: ["PHP", "MySQL", "Figma"],
    categories: ["Full-Stack"],
    github: "https://github.com/Mohamed-Asriff/Event-Management.git",
  },

  /* ───────── UI/UX ───────── */
  {
    id: 11,
    title: "Smart Municipal Council Page UI",
    description:
      "Smart-city web page design with a consistent design system and reusable components.",
    tags: ["Figma"],
    categories: ["UI/UX"],
    github:
      "https://www.figma.com/design/MxL9GYVZdqTulFTs4jjzpK/Untitled?node-id=0-1&t=ZL4eVwu2fB493vpJ-1",
  },
];

export const projectsNav = [
  { name: "All" },
  { name: "IoT & Embedded" },
  { name: "Full-Stack" },
  { name: "UI/UX" },
];

