export interface SkillCategory {
  id: string
  title: string
  iconName: 'frontend' | 'backend' | 'database' | 'languages' | 'tools' | 'concepts'
  description?: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    iconName: 'frontend',
    skills: [
      'React.js',
      'React Native',
      'Next.js',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    iconName: 'backend',
    skills: [
      'Node.js',
      'Express.js',
      'Laravel',
      'REST APIs',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    iconName: 'database',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
    ],
  },
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    iconName: 'languages',
    skills: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'C',
      'PHP',
      'Embedded C',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    iconName: 'tools',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Postman',
      'Figma',
      'Vercel',
      'Redux Toolkit',
      'Expo',
      'Arduino',
    ],
  },
  {
    id: 'concepts',
    title: 'Software Development Concepts',
    iconName: 'concepts',
    skills: [
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Agile Development',
      'API Development',
      'Database Design',
    ],
  },
]
