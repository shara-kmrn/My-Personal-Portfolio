export interface Certification {
  id: string
  title: string
  issuer: string
  date?: string
  credentialUrl?: string
  description?: string
  iconType: 'cloud' | 'container' | 'database' | 'code' | 'gitBranch'
}

export const certificationsData: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: '[Add completion date]',
    description:
      'Foundational cloud learning covering core AWS services, cloud concepts, security, pricing, architecture, and AWS cloud fundamentals.',
    credentialUrl: undefined,
    iconType: 'cloud',
  },
  {
    id: 'docker-foundations',
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker',
    date: '[Add completion date]',
    description:
      'Foundational learning focused on containerization, Docker concepts, images, containers, and core Docker workflows.',
    credentialUrl: undefined,
    iconType: 'container',
  },
  {
    id: 'hackerrank-sql-basic',
    title: 'HackerRank SQL (Basic)',
    issuer: 'HackerRank',
    date: '[Add completion date]',
    description:
      'Demonstrates foundational knowledge of SQL concepts and database querying.',
    credentialUrl: undefined,
    iconType: 'database',
  },
  {
    id: 'sololearn-html',
    title: 'Introduction to HTML',
    issuer: 'SoloLearn',
    date: '[Add completion date]',
    description:
      'Foundational learning covering HTML structure, elements, attributes, and basic web page development.',
    credentialUrl: undefined,
    iconType: 'code',
  },
  {
    id: 'ssoc-season-5',
    title: 'Social Summer of Code Season 5 Contributor',
    issuer: 'Social Summer of Code',
    date: '[Add participation/completion date]',
    description:
      'Selected contributor participating in an open-source contribution program.',
    credentialUrl: undefined,
    iconType: 'gitBranch',
  },
]
