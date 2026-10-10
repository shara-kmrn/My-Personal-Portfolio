import uniLogo from '../assets/photos/uni.jpg'
import esoftLogo from '../assets/photos/images.jpg'
import bmmvLogo from '../assets/photos/BMMV-Logo-1.png'
import olLogo from '../assets/photos/ol.jpg'

export interface EducationItem {
  id: string
  degree: string
  institution: string
  faculty?: string
  logo?: string // Image path or imported image URL
  period: string // Time period (e.g., "2022 - Present" or "2018 - 2020")
  description?: string
  coursework?: string[]
}

export const educationData: EducationItem[] = [
  {
    id: 'mora-it',
    degree: 'Bachelor of Science Honours in Information Technology',
    institution: 'University of Moratuwa',
    faculty: 'Faculty of Information Technology',
    logo: uniLogo,
    period: '2024 - Present',
    coursework: [
      'Programming Fundamentals',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Computer Networks',
      'Software Engineering',
      'Operating Systems',
      'Object-Oriented Analysis & Design'
    ],
  },
  {
    id: 'dip in it',
    degree: 'Diploma in Information Technology',
    institution: 'Esoft Metro Campus',
    logo: esoftLogo,
    period: '2023 - 2024',
    coursework: [
      'Information Technology Concepts',
      'Computer Hardware',
      'Network Technology',
      'Internet, Email & Web Designing',
      'Graphics and Multimedia',
      'Python Programming',
      'Database Concepts',
      'Programming with C#',
    ],
  },
  {
    id: 'school A/L',
    degree: 'G.C.E. Advanced Level(Biological Science Stream)',
    institution: 'B/Bandarawela Central College',
    logo: bmmvLogo,
    period: '2019 - 2021',
    coursework: [
      'Chemistry - A',
      'Physics - B',
      'Biology - B',
      'Z-Score:1.6301',
    ],
  },
  {
    id: 'school O/L',
    degree: 'G.C.E. Ordinary Level',
    institution: 'Am/D.S.Senanayake National School, Ampara',
    logo: olLogo,
    period: '2013 - 2018',
    coursework: [
      "9A's including Business & Accounting Studies, Appreciation of Sinhala Literary Texts and Information & Communication Technology",
    ],
  },
]
