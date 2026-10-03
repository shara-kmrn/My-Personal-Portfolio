export interface Project {
  id: string
  title: string
  fullName?: string
  type: string
  role?: string
  category: 'All' | 'Full-Stack' | 'Web' | 'IoT'
  description: string
  technologies: string[]
  features: string[]
  contribution?: string
  businessRules?: string[]
  sensors?: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

export const projectsData: Project[] = [
  {
    id: 'edubridge',
    title: 'EduBridge',
    type: 'Individual Project',
    role: 'Full-Stack Developer',
    category: 'Full-Stack',
    description:
      'An educational support platform designed to connect underprivileged schools with donors and volunteers.',
    technologies: [
      'Next.js 14',
      'PostgreSQL',
      'Tailwind CSS',
      'Stripe API',
      'Vercel',
    ],
    features: [
      'Resource management',
      'Donation tracking',
      'Volunteer support',
      'Integrated payment processing',
      'Responsive user interface',
      'Server-side rendering',
      'SEO-friendly pages',
    ],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: 'corehead-cms',
    title: 'CoreHead CMS',
    type: 'Group Project',
    role: 'Full-Stack Developer',
    category: 'Full-Stack',
    description:
      'A multi-tenant CMS platform that allows users to create and manage websites with customizable layouts and content.',
    technologies: [
      'Next.js',
      'React 19',
      'TypeScript',
      'Node.js',
      'Express.js',
    ],
    features: [
      'Multi-tenant architecture',
      'Website creation and management',
      'Role-based access control',
      'Dynamic page rendering',
      'Rich-text editor',
      'Blog/content management',
      'Public comments and moderation',
      'Hierarchical categories',
      'Media management',
      'Newsletter subscription',
      'Automated newsletter email notifications',
    ],
    contribution:
      'Implemented the newsletter subscription and notification functionality, including the newsletter subscription form and branded HTML email notification endpoint.',
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: 'event-booking-system',
    title: 'Event Booking System',
    type: 'Individual Project',
    role: 'Full-Stack Developer',
    category: 'Full-Stack',
    description:
      'A web-based event booking platform that allows customers to discover and book events while providing organizers and administrators with management capabilities.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'Stripe',
    ],
    features: [
      'Customer registration and authentication',
      'Role-based access',
      'Event management',
      'Event discovery',
      'Ticket booking',
      'Ticket availability management',
      'Payment processing',
      'Booking management',
      'Admin dashboard',
      'Organizer management',
    ],
    businessRules: [
      'Customers can book an event only before it starts.',
      'Booking is disabled while an event is ongoing.',
      'Events should not appear on the customer home page after they have ended.',
      'Booking should be disabled when tickets are sold out.',
    ],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: 'blimas',
    title: 'BLIMAS',
    fullName: 'Bolgoda Lake IoT-based Monitoring and Alerting System',
    type: 'Group IoT Project',
    role: 'Embedded System Programming',
    category: 'IoT',
    description:
      'An IoT-based environmental monitoring and alerting system designed to collect and visualize environmental data from Bolgoda Lake.',
    technologies: [
      'ESP32',
      'LoRa',
      'AWS',
      'DigitalOcean',
      'PostgreSQL / Amazon RDS',
      'Telegram Bot',
      'Gemini API',
    ],
    sensors: [
      'DS18B20 (Water Temperature)',
      'DHT22 (Ambient Temp & Humidity)',
      'JSN-SR04T (Water Level)',
      'Rainfall Sensor',
    ],
    features: [
      'Environmental data collection',
      'Water temperature monitoring',
      'Ambient temperature and humidity monitoring',
      'Water level monitoring',
      'Rainfall monitoring',
      'LoRa-based communication',
      'Cloud data storage',
      'Dashboard visualization',
      'Telegram alerts',
      'AI-assisted data analysis',
    ],
    contribution:
      'Sensor setup and addressing, DHT22 configuration, data tagging and structuring, sensor reliability testing, and support for sender firmware.',
    githubUrl: undefined,
    liveUrl: undefined,
  },
]
