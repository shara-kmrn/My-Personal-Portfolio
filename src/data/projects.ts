import coreheadImg from '../assets/projects/corehead.jpg'
import blimasImg from '../assets/projects/blimas.jpg'
import blimas1Img from '../assets/projects/blimas1.jpg'
import blimas2Img from '../assets/projects/blimas2.jpg'
import blimas3Img from '../assets/projects/blimas3.jpg'
import weatherImg from '../assets/projects/weather.jpg'
import portfolioImg from '../assets/projects/portfolio.png'

export interface HighlightItem {
  title: string
  desc: string
}

export interface Project {
  id: string
  title: string
  fullName?: string
  type: string
  period?: string
  role?: string
  category: 'All' | 'Full-Stack' | 'Web' | 'IoT'
  description: string
  technologies: string[]
  features: string[]
  contribution?: string
  highlights?: HighlightItem[]
  businessRules?: string[]
  sensors?: string[]
  githubUrl?: string
  githubFrontendUrl?: string
  githubBackendUrl?: string
  liveUrl?: string
  image?: string
  gallery?: string[]
}

export const projectsData: Project[] = [
  {
    id: 'corehead-cms',
    title: 'CoreHead-Intelligent Blog Builder',
    fullName: 'Intelligent Blog Builder & AI-Powered CMS',
    type: 'Group Project',
    category: 'Full-Stack',
    description:
      'A unified platform engineered to empower creators and businesses to design, customize, and publish professional blog sites without deep technical or coding hurdles.',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Nodemailer',
      'ReactQuill',
      'PostgreSQL',
      'Prisma ORM',
      'Groq SDK (LLaMA 3.1)',
      'Google Gemini API',
      'Zod',
      'JWT Auth',
      'Railway',
    ],
    features: [
      'Multi-tenant public tenant rendering (/s/[siteSlug]) with dynamic theme preset switching',
      'Automated subscriber notification engine (/api/newsletter/notify-post) via Nodemailer',
      'Advanced content editor with scheduled publishing, canonical URLs & ReactQuill image overlay',
      'Multi-tenant comment discussion threads & admin moderation dashboard (/admin/interactions)',
      'Hierarchical category taxonomy with auto-slug generator & parent-child structures',
      'Interactive visual canvas editor with live styling & state serialization',
      'AI-assisted layout generation (Groq / Gemini) with schema validation',
      'Stateless dual-token JWT authentication with rate-limiting & deep email verification',
    ],
    contribution:
      'Engineered the automated subscriber notification engine (Nodemailer), post authoring workflows with custom ReactQuill image overlay, multi-tenant comment moderation system, hierarchical category taxonomy, and dynamic multi-tenant theme engine.',
    highlights: [
      {
        title: 'Automated Subscriber Notification Engine',
        desc: 'Built the broadcast pipeline (/api/newsletter/notify-post) using Nodemailer to dispatch responsive HTML email updates to subscribers upon new post publication.',
      },
      {
        title: 'Advanced Content Editor & Post Workflows',
        desc: 'Developed post authoring tools supporting scheduled publishing, canonical URLs, and a custom ReactQuill Image Control Overlay for real-time image scaling and text wrapping.',
      },
      {
        title: 'Multi-Tenant Comment Moderation',
        desc: 'Built public discussion threads (CommentsSection.tsx) and a centralized admin moderation dashboard (/admin/interactions) to approve, reply to, and manage reader comments securely per site context.',
      },
      {
        title: 'Hierarchical Category Taxonomy',
        desc: 'Engineered category management (/admin/categories) with an auto-slug generator, URL preview badges, and parent-child structures powering dynamic navbars and breadcrumbs.',
      },
      {
        title: 'Dynamic Multi-Tenant Theme Engine',
        desc: 'Contributed to public tenant rendering (/s/[siteSlug]) with live CSS variable injection, enabling instant visual preset switches.',
      },
    ],
    githubFrontendUrl: 'https://github.com/shara-kmrn/CoreHead-Frontend',
    githubBackendUrl: 'https://github.com/shara-kmrn/CoreHead-Backend',
    githubUrl: undefined,
    liveUrl: undefined,
    image: coreheadImg,
  },
  {
    id: 'event-booking-system',
    title: 'Event Management & Ticketing',
    fullName: 'Event Management Ticketing Micro-SaaS Platform',
    type: 'Individual Project',
    period: 'Ongoing',
    category: 'Full-Stack',
    description:
      'Full-stack multi-tenant event management and ticketing platform featuring role-based access control, atomic ticket reservation, QR code check-in verification, and real-time revenue analytics for organizers and attendees.',
    technologies: [
      'React (Vite)',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS v4',
      'Axios',
      'JWT',
      'REST APIs',
      'qrcode.react',
    ],
    features: [
      'Full-stack micro-SaaS architecture within a modular monorepo structure',
      'Secure Role-Based Access Control (RBAC) supporting Customer and Event Organizer roles',
      'Atomic ticket booking and inventory management engine preventing race conditions under concurrency',
      'Client-side digital ticket generation with dynamic QR code rendering (qrcode.react)',
      'Gate check-in token verification workflows for organizers at entry gates',
      'Organizer Dashboard with event publishing, real-time ticket sales tracking & automated analytics',
    ],
    highlights: [
      {
        title: 'Full-Stack Micro-SaaS Architecture',
        desc: 'Architecting and developing a full-stack micro-SaaS application using React (Vite), Node.js, Express.js, MongoDB, and Tailwind CSS v4 within a monorepo structure.',
      },
      {
        title: 'Role-Based Access Control & Security',
        desc: 'Engineering secure Role-Based Access Control (RBAC) and authentication workflows supporting Customer and Event Organizer roles using JWT, HTTP interceptors, and React Context.',
      },
      {
        title: 'Atomic Ticket Booking Engine',
        desc: 'Developing an atomic ticket booking and inventory management engine to prevent race conditions and handle concurrent seat reservations.',
      },
      {
        title: 'Digital QR Tickets & Gate Check-In',
        desc: 'Implementing client-side digital ticket generation with dynamic QR code rendering (qrcode.react) and gate check-in token verification workflows.',
      },
      {
        title: 'Organizer Dashboard & Revenue Analytics',
        desc: 'Designing and integrating an Organizer Dashboard featuring event publishing, real-time ticket sales tracking, and automated check-in verification.',
      },
    ],
    contribution:
      'Architecting and developing the full-stack micro-SaaS application, implementing atomic ticket reservations, QR-code based ticket generation, RBAC authentication workflows, and real-time organizer revenue dashboards.',
    businessRules: [
      'Atomic reservation prevents overselling and race conditions under concurrent load.',
      'Customers can book an event only before scheduled commencement.',
      'Ticket sales automatically lock when an event reaches capacity or has ended.',
      'Gate check-in tokens verify QR code validity and enforce single-entry verification.',
    ],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: 'blimas',
    title: 'BLIMAS',
    fullName: 'Bolgoda Lake IoT-based Monitoring & Alerting System',
    type: 'Group Project',
    category: 'IoT',
    description:
      'A microcontroller-based IoT environmental monitoring system developed as part of our coursework at the Faculty of Information Technology, University of Moratuwa, designed to collect, transmit, and analyze environmental data efficiently.',
    technologies: [
      'ESP32',
      'LoRa',
      'DHT22',
      'DS18B20',
      'JSN-SR04T',
      'AWS RDS',
      'PostgreSQL',
      'DigitalOcean',
      'Telegram Bot',
      'Google Gemini API',
      'Data Structuring & Visualization',
    ],
    sensors: [
      'DHT22 (Ambient Temp & Humidity)',
      'DS18B20 (Water Temperature)',
      'JSN-SR04T (Water Level)',
      'Rainfall Sensor',
    ],
    features: [
      'Real-time monitoring of temperature, humidity, and water levels',
      'LoRa-based long-range communication operating without mobile networks in rural areas',
      'Cloud storage and analytics pipeline on AWS RDS & PostgreSQL',
      'AI anomaly detection using Google Gemini with instant real-time alerts via Telegram Bot',
      'Solar-powered battery system with deep sleep modes for maximum energy efficiency',
      'Dual data visualization on local on-device ESP32 display and web dashboard',
    ],
    highlights: [
      {
        title: 'Long-Range Connectivity in Rural Areas',
        desc: 'Works reliably in rural and off-grid lake environments without mobile cellular network dependency using LoRa long-range wireless communication.',
      },
      {
        title: 'Solar-Powered Autonomous Efficiency',
        desc: 'Runs on an energy-efficient solar-powered battery system utilizing deep sleep cycles for sustainable, uninterrupted operation.',
      },
      {
        title: 'Dual Real-Time Data Interface',
        desc: 'Provides immediate real-time metrics on an on-device local ESP32 display as well as a centralized web dashboard.',
      },
      {
        title: 'AI Anomaly Detection & Instant Telegram Alerts',
        desc: 'Employs Google Gemini AI for advanced environmental trend analysis and dispatches instant automated alerts through a Telegram bot upon detecting anomalies.',
      },
    ],
    contribution:
      'Sensor setup and addressing, DHT22 configuration, data tagging and structuring, sensor reliability testing, and support for sender firmware.',
    githubUrl: 'https://github.com/keshaka/BLIMAS',
    liveUrl: undefined,
    image: blimas3Img,
    gallery: [blimas3Img, blimasImg, blimas1Img, blimas2Img],
  },
   {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    fullName: 'Modern Interactive Developer Portfolio & Showcase',
    type: 'Individual Project',
    category: 'Web',
    description:
      'A modern, high-performance personal developer portfolio web application built with React 19, TypeScript, Vite, and Tailwind CSS v4, engineered to showcase engineering projects, certifications, technical skills, and leadership experiences.',
    technologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Motion',
      'Lucide Icons',
      'Git',
      'GitHub',
    ],
    features: [
      'Responsive modern dark/light UI with custom grid backgrounds and glassmorphism cards',
      'Dynamic multi-category project filtering (Full-Stack, Web, IoT) with animated layout transitions',
      'Interactive Project Details modals with accessible keyboard navigation (ESC) & body scroll locking',
      'Categorized technical skills showcase across Languages, Frontend, Backend, Databases, and Tools',
      'Comprehensive certifications section with verified modal credential viewing',
      'Direct contact integration with WhatsApp quick-chat, social channels, and instant CV download',
    ],
    highlights: [
      {
        title: 'Modern React 19 & Vite Architecture',
        desc: 'Engineered using React 19 and Vite for blazing-fast development reload cycles and an ultra-lean, optimized production build.',
      },
      {
        title: 'Fluid Orchestrated Micro-Animations',
        desc: 'Integrated Motion (Framer Motion) for staggered container animations, smooth filter transitions, and interactive hover feedback.',
      },
      {
        title: 'Accessible Modal & Dialog Management',
        desc: 'Built custom accessible modal dialogs with backdrop blur dismissals, Escape key handlers, and clean body scroll management.',
      },
      {
        title: 'Modern Custom Design System',
        desc: 'Designed a sleek modern UI with Tailwind CSS v4, custom theme accents, and responsive mobile-first layouts.',
      },
    ],
    contribution:
      'Designed, architected, and developed the entire personal portfolio from scratch, including UI component design, animation systems, responsive layouts, and content integration.',
    githubUrl: 'https://github.com/shara-kmrn/My-Personal-Portfolio',
    liveUrl: 'https://my-personal-portfolio-rn-898c.vercel.app/',
    image: portfolioImg,
  },
  {
    id: 'weather-dashboard',
    title: 'Live Weather Dashboard',
    fullName: 'Real-Time Weather Metrics & 5-Day Forecast System',
    type: 'Individual Project',
    category: 'Web',
    description:
      'Developed and deployed a modern, responsive Weather Dashboard web application featuring a dynamic glassmorphism UI system and live weather API integration.',
    technologies: [
      'HTML5',
      'CSS3 (Glassmorphism)',
      'Modern JavaScript (ES6+)',
      'OpenWeather API',
      'Git',
      'GitHub',
      'Netlify',
    ],
    features: [
      'Real-Time OpenWeather REST API metrics (temperature, humidity, wind speed, atmospheric pressure, and visibility)',
      '5-Day dynamic weather forecast grid fetching daily forecast data',
      'Dynamic adaptive UI updating background themes based on real-time weather conditions (Clear, Rain, Clouds, Snow, Mist)',
      'Quick-city search chips & GPS Geolocation auto-detection',
      'Interactive °C / °F temperature unit toggle with smooth animations',
      'Fully responsive cross-device layout hosted on Netlify',
    ],
    highlights: [
      {
        title: 'Real-Time Data Integration',
        desc: 'Connects with OpenWeather REST API to fetch live weather metrics including temperature, humidity, wind speed, atmospheric pressure, and visibility.',
      },
      {
        title: '5-Day Weather Forecast',
        desc: 'Displays a multi-day forecast grid fetching daily forecast data dynamically.',
      },
      {
        title: 'Dynamic Adaptive UI',
        desc: 'Automatically updates background themes based on real-time weather conditions (Clear, Rain, Clouds, Snow, Mist).',
      },
      {
        title: 'Interactive User Experience',
        desc: 'Features quick-city search chips, GPS Geolocation auto-detection, °C / °F unit toggle, and smooth animations.',
      },
      {
        title: 'Responsive & Deployed',
        desc: 'Built using HTML5, CSS3, JavaScript (ES6+), hosted on Netlify, and version controlled using Git & GitHub.',
      },
    ],
    liveUrl: 'https://keen-boba-543310.netlify.app/',
    githubUrl: 'https://github.com/shara-kmrn/WeatherApp',
    image: weatherImg,
  },
 
]
