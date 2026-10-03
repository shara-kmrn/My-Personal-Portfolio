export interface Activity {
  id: string
  organization: string
  institution?: string
  roles: string[]
  iconType: 'users' | 'briefcase' | 'mountain' | 'trophy'
}

export const activitiesData: Activity[] = [
  {
    id: 'ieee-student-branch',
    organization: 'IEEE Student Branch',
    institution: 'University of Moratuwa',
    roles: ['Beyond the Pages 1.0 Programme and Logistics Committee Member'],
    iconType: 'users',
  },
  {
    id: 'leo-club',
    organization: 'LEO Club',
    institution: 'University of Moratuwa',
    roles: [
      'Knights Organizing Committee Member',
      'AurorAWE Finance Committee Member',
    ],
    iconType: 'briefcase',
  },
  {
    id: 'mora-hiking-club',
    organization: 'Mora Hiking Club',
    institution: 'University of Moratuwa',
    roles: ['Logistics Committee Member'],
    iconType: 'mountain',
  },
  {
    id: 'school-hockey-team',
    organization: 'School Hockey Team',
    roles: ['Team Player'],
    iconType: 'trophy',
  },
]

export const activitySkills = [
  'Teamwork',
  'Leadership',
  'Communication',
  'Event Coordination',
  'Collaboration',
  'Responsibility',
]
