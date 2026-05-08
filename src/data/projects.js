export const projects = [
  {
    slug: 'panvert-mining-operations',
    title: 'Panvert Mining Operations Platform',
    description: 'A centralized digital operations management system that replaces manual records and integrates mining, plant, and logistics workflows across the company.',
    category: 'Full-Stack',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Flutter', 'AWS'],
    hero: '🏭',
    github: 'https://github.com/davidchabikwa/panvert-mining-operations',
    demo: 'https://example.com/panvert',
    problem:
      'Manual paper records led to delays, inconsistent reporting, and limited visibility across mining, plant, and transport operations.',
    solution:
      'Built a web dashboard and mobile supervisor interface to log attendance, track production, record equipment breakdowns, and manage dispatch in real time.',
    results:
      'Improved operational transparency, reduced reporting time, and enabled faster decision-making across multi-department mining operations.',
    role: 'Full-Stack Developer',
    year: '2024',
  },
  {
    slug: 'zcc-whatsapp-chatbot',
    title: 'ZCC WhatsApp Chatbot',
    description: 'An automated WhatsApp assistant for church members to access service schedules, announcements, prayer requests, and event updates instantly.',
    category: 'Backend',
    technologies: ['Python', 'Flask', 'WhatsApp Cloud API', 'PostgreSQL'],
    hero: '🤖',
    github: 'https://github.com/davidchabikwa/zcc-whatsapp-chatbot',
    demo: 'https://example.com/zcc-bot',
    problem:
      'Church members needed a faster way to receive updates without manual messaging and were unable to access timely information after hours.',
    solution:
      'Created a WhatsApp chatbot that responds to structured commands, shares service info, captures prayer requests, and delivers announcements automatically.',
    results:
      'Reduced manual communication load and improved member engagement through reliable automated messaging.',
    role: 'Backend Developer',
    year: '2024',
  },
  {
    slug: 'mora-housing-platform',
    title: 'MO-RA Off-Campus Accommodation',
    description: 'A modern listing platform for university students to find verified off-campus housing with transparent property details and caretaker contact information.',
    category: 'Full-Stack',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'SQLite'],
    hero: '🏠',
    github: 'https://github.com/davidchabikwa/mora-housing-platform',
    demo: 'https://example.com/mora',
    problem:
      'Students struggled to find reliable off-campus housing and often encountered misleading listings, fraud, and poor communication.',
    solution:
      'Built a house listing platform with verified properties, image galleries, location details, and admin controls for caregivers.',
    results:
      'Created a trusted housing search experience that simplifies accommodation discovery for students.',
    role: 'Full-Stack Developer',
    year: '2024',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
