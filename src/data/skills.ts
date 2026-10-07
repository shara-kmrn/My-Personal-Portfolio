export interface SkillItem {
  name: string
  iconKey: string
  color?: string
}

export interface SkillCategory {
  id: string
  title: string
  iconName: 'languages' | 'frontend' | 'backend' | 'database' | 'tools'
  description?: string
  skills: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    iconName: 'languages',
    skills: [
      { name: 'JavaScript', iconKey: 'javascript', color: '#F7DF1E' },
      { name: 'TypeScript', iconKey: 'typescript', color: '#3178C6' },
      { name: 'Python', iconKey: 'python', color: '#3776AB' },
      { name: 'C#', iconKey: 'csharp', color: '#512BD4' },
      { name: 'Java', iconKey: 'java', color: '#ED8B00' },
      { name: 'C', iconKey: 'c', color: '#A8B9CC' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    iconName: 'frontend',
    skills: [
      { name: 'Next.js', iconKey: 'nextjs', color: '#000000' },
      { name: 'React', iconKey: 'react', color: '#61DAFB' },
      { name: 'HTML', iconKey: 'html', color: '#E34F26' },
      { name: 'CSS', iconKey: 'css', color: '#1572B6' },
      { name: 'Tailwind CSS', iconKey: 'tailwindcss', color: '#06B6D4' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    iconName: 'backend',
    skills: [
      { name: 'Node.js', iconKey: 'nodejs', color: '#5FA04E' },
      { name: 'Express.js', iconKey: 'express', color: '#68A063' },
      { name: 'RESTful APIs', iconKey: 'restapi', color: '#38BDF8' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    iconName: 'database',
    skills: [
      { name: 'MySQL', iconKey: 'mysql', color: '#4479A1' },
      { name: 'Microsoft SQL Server', iconKey: 'mssql', color: '#CC292B' },
      { name: 'MongoDB', iconKey: 'mongodb', color: '#47A248' },
      { name: 'PostgreSQL', iconKey: 'postgresql', color: '#4169E1' },
    ],
  },
  {
    id: 'tools-practices',
    title: 'Tools & Practices',
    iconName: 'tools',
    skills: [
      { name: 'Git', iconKey: 'git', color: '#F05032' },
      { name: 'GitHub', iconKey: 'github', color: '#181717' },
      { name: 'Agile', iconKey: 'agile', color: '#0052CC' },
      { name: 'Postman', iconKey: 'postman', color: '#FF6C37' },
      { name: 'Figma', iconKey: 'figma', color: '#F24E1E' },
      { name: 'Docker', iconKey: 'docker', color: '#2496ED' },
    ],
  },
]
