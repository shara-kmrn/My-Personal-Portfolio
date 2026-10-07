import awsCert from '../assets/certificates/Screenshot 2026-10-07 233826.png'
import dockerFoundationsCert from '../assets/certificates/1789688861614.jpg'
import learningDockerCert from '../assets/certificates/1789587087434.jpg'
import codlFrontEndCert from '../assets/certificates/Screenshot 2026-10-07 234009.png'
import codlWebDesignCert from '../assets/certificates/Screenshot 2026-10-07 234121.png'
import sqlBasicsCert from '../assets/certificates/SQL Basics.png'
import htmlCert from '../assets/certificates/introduction to ht ml.png'
import javaIntroCert from '../assets/certificates/inrtoduction to java.jpg'
import javaInterCert from '../assets/certificates/java intermediate.jpg'
import cIntroCert from '../assets/certificates/introduction to c.jpg'
import cInterCert from '../assets/certificates/C intermediate.jpg'

export interface Certification {
  id: string
  title: string
  issuer: string
  date?: string
  credentialUrl?: string
  description?: string
  iconType: 'cloud' | 'container' | 'database' | 'code' | 'gitBranch'
  image?: string
}

export const certificationsData: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Sep 11, 2026',
    description:
      'Foundational cloud learning covering core AWS services, cloud concepts, security, pricing, architecture, and AWS cloud fundamentals.',
    credentialUrl: undefined,
    iconType: 'cloud',
    image: awsCert,
  },
  {
    id: 'docker-foundations',
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker & LinkedIn Learning',
    date: 'Sep 17, 2026',
    description:
      'Foundational learning focused on containerization, Docker concepts, images, containers, and core Docker workflows.',
    credentialUrl: undefined,
    iconType: 'container',
    image: dockerFoundationsCert,
  },
  {
    id: 'learning-docker',
    title: 'Learning Docker',
    issuer: 'LinkedIn Learning',
    date: 'Sep 16, 2026',
    description:
      'Practical course covering essential Docker product fundamentals, container management, and image configuration.',
    credentialUrl: undefined,
    iconType: 'container',
    image: learningDockerCert,
  },
  {
    id: 'codl-frontend',
    title: 'Front-End Web Development',
    issuer: 'CODL - University of Moratuwa',
    date: '2026',
    description:
      'Online learning programme in Front-End Web Development conducted by the Department of Information Technology, UoM.',
    credentialUrl: undefined,
    iconType: 'code',
    image: codlFrontEndCert,
  },
  {
    id: 'codl-webdesign',
    title: 'Web Design for Beginners',
    issuer: 'CODL - University of Moratuwa',
    date: '2026',
    description:
      'Online learning programme in Web Design for Beginners conducted by the Department of Information Technology, UoM.',
    credentialUrl: undefined,
    iconType: 'code',
    image: codlWebDesignCert,
  },
  {
    id: 'hackerrank-sql-basic',
    title: 'HackerRank SQL (Basic)',
    issuer: 'HackerRank',
    date: 'Mar 19, 2026',
    description:
      'Demonstrates foundational knowledge of SQL concepts and database querying.',
    credentialUrl: undefined,
    iconType: 'database',
    image: sqlBasicsCert,
  },
  {
    id: 'sololearn-html',
    title: 'Introduction to HTML',
    issuer: 'SoloLearn',
    date: 'Jul 17, 2025',
    description:
      'Foundational learning covering HTML structure, elements, attributes, and basic web page development.',
    credentialUrl: undefined,
    iconType: 'code',
    image: htmlCert,
  },
  {
    id: 'sololearn-java-intro',
    title: 'Introduction to Java',
    issuer: 'SoloLearn',
    date: 'Mar 14, 2026',
    description:
      'Foundational learning covering Java syntax, basic logic structures, and object-oriented concepts.',
    credentialUrl: undefined,
    iconType: 'code',
    image: javaIntroCert,
  },
  {
    id: 'sololearn-java-intermediate',
    title: 'Java Intermediate',
    issuer: 'SoloLearn',
    date: 'Mar 14, 2026',
    description:
      'Intermediate object-oriented programming in Java including inheritance, polymorphism, arrays, and exception handling.',
    credentialUrl: undefined,
    iconType: 'code',
    image: javaInterCert,
  },
  {
    id: 'sololearn-c-intro',
    title: 'Introduction to C',
    issuer: 'SoloLearn',
    date: 'Mar 15, 2026',
    description:
      'Foundational C programming concepts including memory basics, logic statements, loops, and functions.',
    credentialUrl: undefined,
    iconType: 'code',
    image: cIntroCert,
  },
  {
    id: 'sololearn-c-intermediate',
    title: 'C Intermediate',
    issuer: 'SoloLearn',
    date: 'Mar 16, 2026',
    description:
      'Deeper exploration of C language including pointers, dynamic memory allocation, and structures.',
    credentialUrl: undefined,
    iconType: 'code',
    image: cInterCert,
  },
  
]

