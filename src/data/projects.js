export const projects = [
  {
    id: "weather-dashboard",

    title: "Weather Dashboard",

    description:
      "A responsive weather application that provides real-time weather information, forecasts, and geolocation support using external APIs.",

    status: "completed",

    featured: true,

    tech: [
      "React",
      "Vite",
      "JavaScript",
      "CSS3",
      "Open-Meteo API",
      "Geolocation API",
    ],

    features: [
      "Search weather by city name",
      "Automatic location-based weather detection",
      "Fallback to Mumbai when location access is denied",
      "Search using the Enter key",
      "Loading indicators during API requests",
      "Responsive and accessible user interface",
    ],

    technicalHighlights: [
      "Graceful error handling",
      "Accessible forms using aria-label",
      "Prevention of duplicate API requests",
      "Weather condition code mapping",
      "Fallback location strategy",
    ],

    plannedEnhancements: [
      "City autocomplete suggestions",
      "5-day weather forecasts",
      "Dark mode support",
      "Recently searched cities using Local Storage",
      "Custom useWeather hook",
      "TypeScript migration",
    ],

    github: "https://github.com/pradeepk1787/react-weather-dashboard",
    demo: "https://react-weather-dashboard-two-rho.vercel.app/",
  },
  {
    id: "todo-app",

    title: "Todo App",

    description:
      "A modern task management application that allows users to create, edit, and organize tasks through a clean and responsive interface.",

    status: "completed",

    featured: false,

    tech: ["React", "Vite", "JavaScript", "CSS3"],

    features: [
      "Add new tasks",
      "Edit existing tasks",
      "Delete tasks",
      "Cancel task editing",
      "Add tasks using the Enter key",
      "Responsive user interface",
    ],

    technicalHighlights: [
      "Accessible icon buttons using aria-label",
      "Prevention of empty task submissions",
      "Dynamic task count display",
      "Reusable React components",
      "Clean state management using React Hooks",
    ],

    plannedEnhancements: [
      "Persistent task storage using Local Storage",
      "Task categories and priorities",
      "Drag-and-drop task reordering",
      "Dark mode support",
      "Cloud synchronization",
      "TypeScript migration",
      "Unit and integration tests",
    ],

    github: "https://github.com/pradeepk1787/react-todo-app",
    demo: "https://react-todo-app-pi-ashy.vercel.app/",
  },
  {
    id: "portfolio-router",

    title: "React Portfolio Router",

    description:
      "A professional portfolio application built with React and React Router, showcasing modern frontend development practices, reusable components, and dynamic routing architecture.",

    status: "completed",

    featured: true,

    tech: ["React", "React Router", "Vite", "JavaScript", "CSS3"],

    features: [
      "Multi-page portfolio experience",
      "Dynamic project detail pages",
      "Responsive and accessible design",
      "Reusable component architecture",
      "Custom 404 page",
      "Professional project showcase",
    ],

    technicalHighlights: [
      "Nested and dynamic routing using React Router",
      "Route-based layouts with Outlet",
      "Data-driven UI rendering using .map()",
      "Separation of concerns through pages, components, and data folders",
      "Component-specific styling strategy",
      "Scalable application structure",
    ],

    plannedEnhancements: [
      "Project screenshots and image galleries",
      "Dark/light theme switching",
      "Blog section using dynamic routes",
      "Animations using Framer Motion",
      "SEO improvements with React Helmet",
      "TypeScript migration",
      "Automated testing",
    ],

    github: "https://github.com/pradeepk1787/react-portfolio",
    demo: " https://react-portfolio-eight-beta-69.vercel.app/",
  },
];
