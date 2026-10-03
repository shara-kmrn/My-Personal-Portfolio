export interface EducationItem {
  id: string
  degree: string
  institution: string
  faculty?: string
  period: string
  description?: string
  coursework?: string[]
}

export const educationData: EducationItem[] = [
  {
    id: 'mora-it',
    degree: 'Bachelor of Science Honours in Information Technology',
    institution: 'University of Moratuwa',
    faculty: 'Faculty of Information Technology',
    period: 'Academic Period: [Add academic period]', // TODO: Replace placeholder with actual academic years (e.g., "2022 - Present")
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Computer Networks',
      'Software Engineering',
      'Agile Methodologies',
    ],
  },
]
