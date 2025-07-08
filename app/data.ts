type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Placeholder',
    description: '',
    link: '',
    video:
      '',
    id: '',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Deloitte',
    title: 'Data and AI Analyst',
    start: '2025',
    end: 'Present',
    link: '',
    id: 'work1',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'My Resume',
    description: 'The current version of my resume, showcasing my skills and experience.',
    link: '/blog/resume',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/lemontriet',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/letriet',
  }
]

export const EMAIL = 'treeminhlee@gmail.com'
