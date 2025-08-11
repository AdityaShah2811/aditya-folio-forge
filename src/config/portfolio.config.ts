export interface PersonalInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  location: {
    city: string;
    state: string;
    country: string;
    timezone: string;
  };
  headline: string;
  bio: {
    short: string;
    long: string;
  };
  currentStatus: string;
  resumeUrl: string;
  profileImageUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  iconName: string;
  displayOrder: number;
}

export interface Achievement {
  text: string;
  impactMetric?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  description: string;
  achievements: Achievement[];
  technologies: string[];
  displayOrder: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  isFeatured: boolean;
  technologies: string[];
  stats: {
    users?: string;
    performance?: string;
    impact?: string;
  };
  displayOrder: number;
  createdDate: string;
}

export interface Skill {
  name: string;
  category: string;
  proficiencyLevel: number;
  yearsExperience: number;
  relatedProjects?: string[];
}

export interface Education {
  id: string;
  degree: string;
  fieldOfStudy: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  gpa?: string;
  relevantCoursework?: string[];
  achievements?: string[];
  displayOrder: number;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  isInProgress: boolean;
}

export interface PortfolioConfig {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  education: Education[];
  certifications: Certification[];
  terminal: {
    welcomeMessage: string;
    asciiArt: string;
    commands: Record<string, any>;
    themes: Record<string, any>;
  };
}

export const portfolioConfig: PortfolioConfig = {
  personalInfo: {
    firstName: "Aditya",
    lastName: "Shah",
    fullName: "Aditya Pranav Shah",
    professionalTitle: "Software Engineer",
    email: "adityashah@example.com",
    phone: "+1 (555) 123-4567",
    location: {
      city: "San Francisco",
      state: "CA",
      country: "United States",
      timezone: "PST"
    },
    headline: "Building exceptional digital experiences through innovative code",
    bio: {
      short: "Passionate software engineer with expertise in modern web technologies and a drive for creating impactful digital solutions.",
      long: "I'm a dedicated software engineer with a passion for creating innovative solutions and learning cutting-edge technologies. My journey in software development has been driven by curiosity and a desire to build applications that make a meaningful impact. I specialize in full-stack development with a focus on user experience and scalable architectures."
    },
    currentStatus: "Open to new opportunities",
    resumeUrl: "/resume.pdf",
    profileImageUrl: ""
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/adityashah",
      username: "adityashah",
      iconName: "github",
      displayOrder: 1
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/adityashah",
      username: "adityashah",
      iconName: "linkedin",
      displayOrder: 2
    },
    {
      platform: "Email",
      url: "mailto:adityashah@example.com",
      username: "adityashah@example.com",
      iconName: "mail",
      displayOrder: 3
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Software Engineer",
      company: "Tech Innovations LLC",
      location: "San Francisco, CA",
      startDate: "2023-01",
      endDate: undefined,
      isCurrent: true,
      description: "Developing and maintaining scalable web applications using modern technologies. Leading frontend development initiatives and collaborating with cross-functional teams.",
      achievements: [
        {
          text: "Improved application performance by 40% through optimization techniques",
          impactMetric: "40% improvement"
        },
        {
          text: "Led migration of legacy codebase to modern React framework",
          impactMetric: "Full migration"
        },
        {
          text: "Mentored 3 junior developers and established coding best practices",
          impactMetric: "3 developers"
        }
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      displayOrder: 1
    },
    {
      id: "exp-2",
      role: "Junior Software Developer",
      company: "StartupHub",
      location: "Remote",
      startDate: "2022-06",
      endDate: "2022-12",
      isCurrent: false,
      description: "Built responsive web applications and contributed to product development in an agile environment.",
      achievements: [
        {
          text: "Developed 5 key features that increased user engagement by 25%",
          impactMetric: "25% increase"
        },
        {
          text: "Implemented automated testing reducing bugs by 60%",
          impactMetric: "60% reduction"
        }
      ],
      technologies: ["JavaScript", "React", "Express.js", "MongoDB"],
      displayOrder: 2
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Application",
      shortDescription: "A comprehensive e-commerce solution with modern UI and robust backend.",
      longDescription: "Built a complete e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Implemented responsive design and optimized for performance.",
      imageUrl: "",
      githubUrl: "https://github.com/adityashah/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      isFeatured: true,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      stats: {
        users: "1K+ users",
        performance: "98% uptime",
        impact: "500+ orders"
      },
      displayOrder: 1,
      createdDate: "2023-08"
    },
    {
      id: "proj-2",
      title: "Task Management App",
      subtitle: "Productivity Tool",
      shortDescription: "A collaborative task management application with real-time updates.",
      longDescription: "Developed a task management application with features like project collaboration, real-time notifications, file attachments, and progress tracking. Implemented responsive design for mobile and desktop.",
      imageUrl: "",
      githubUrl: "https://github.com/adityashah/taskmanager",
      liveUrl: "https://taskmanager-demo.com",
      isFeatured: true,
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      stats: {
        users: "500+ users",
        performance: "99% uptime",
        impact: "2K+ tasks completed"
      },
      displayOrder: 2,
      createdDate: "2023-05"
    },
    {
      id: "proj-3",
      title: "Weather Dashboard",
      subtitle: "Data Visualization",
      shortDescription: "Interactive weather dashboard with real-time data and forecasts.",
      longDescription: "Created a weather dashboard that displays current conditions, forecasts, and historical data with interactive charts and maps. Integrated multiple weather APIs for comprehensive data.",
      imageUrl: "",
      githubUrl: "https://github.com/adityashah/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.com",
      isFeatured: false,
      technologies: ["React", "D3.js", "Weather API", "Chart.js"],
      stats: {
        users: "300+ users",
        performance: "Real-time updates",
        impact: "10K+ queries"
      },
      displayOrder: 3,
      createdDate: "2023-02"
    }
  ],
  skills: [
    { name: "JavaScript", category: "Languages", proficiencyLevel: 5, yearsExperience: 3 },
    { name: "TypeScript", category: "Languages", proficiencyLevel: 4, yearsExperience: 2 },
    { name: "Python", category: "Languages", proficiencyLevel: 3, yearsExperience: 2 },
    { name: "React", category: "Frameworks", proficiencyLevel: 5, yearsExperience: 3 },
    { name: "Node.js", category: "Frameworks", proficiencyLevel: 4, yearsExperience: 2 },
    { name: "Express.js", category: "Frameworks", proficiencyLevel: 4, yearsExperience: 2 },
    { name: "Next.js", category: "Frameworks", proficiencyLevel: 3, yearsExperience: 1 },
    { name: "PostgreSQL", category: "Databases", proficiencyLevel: 4, yearsExperience: 2 },
    { name: "MongoDB", category: "Databases", proficiencyLevel: 4, yearsExperience: 2 },
    { name: "AWS", category: "Cloud", proficiencyLevel: 3, yearsExperience: 1 },
    { name: "Docker", category: "DevOps", proficiencyLevel: 3, yearsExperience: 1 },
    { name: "Git", category: "Tools", proficiencyLevel: 5, yearsExperience: 3 },
    { name: "Figma", category: "Design", proficiencyLevel: 3, yearsExperience: 2 }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "2020-09",
      endDate: "2024-05",
      isCurrent: false,
      gpa: "3.7",
      relevantCoursework: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
      achievements: ["Dean's List", "Programming Competition Winner"],
      displayOrder: 1
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Cloud Practitioner",
      issuingOrganization: "Amazon Web Services",
      issueDate: "2023-06",
      expiryDate: "2026-06",
      credentialId: "AWS-CP-123456",
      credentialUrl: "https://aws.amazon.com/verification",
      isInProgress: false
    }
  ],
  terminal: {
    welcomeMessage: "Welcome to Aditya's interactive portfolio terminal!",
    asciiArt: `
    ╔═══════════════════════════════════════════════════════════════╗
    ║                    Aditya Pranav Shah                         ║
    ║                    Software Engineer                          ║
    ╚═══════════════════════════════════════════════════════════════╝
    `,
    commands: {
      help: "Display all available commands",
      about: "Learn about Aditya",
      experience: "View work experience",
      projects: "Browse projects",
      skills: "Explore technical skills",
      education: "View educational background",
      contact: "Get contact information",
      resume: "Download resume",
      clear: "Clear the terminal screen"
    },
    themes: {
      default: {
        background: "#1a1a1a",
        text: "#00ff00",
        accent: "#ffff00",
        error: "#ff0000"
      }
    }
  }
};