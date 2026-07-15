import type { m } from '$lib/paraglide/messages'
import github from '@iconify-svelte/iconoir/github'
import linkedin from '@iconify-svelte/iconoir/linkedin'
import mail from '@iconify-svelte/iconoir/mail'

export const name = 'Levi'

export type StaticMessageKeys = {
  [K in keyof typeof m]: (typeof m)[K] extends () => string ? K : never
}[keyof typeof m]

type Project = {
  id: string
  label: string
  description: StaticMessageKeys
  categories: ('web' | 'mobile')[]
  techs: string[]
  repository: string
  website?: string
}

export const projects: Project[] = [
  {
    id: 'sabine',
    label: 'Sabine',
    description: 'pages.projects.sabine',
    categories: ['web'],
    techs: [
      'TypeScript',
      'Bun',
      'Vue',
      'PostgreSQL',
      'Drizzle ORM',
      'Prisma ORM',
      'Elysia',
      'Fastify'
    ],
    repository: 'https://github.com/sabinelab',
    website: 'https://sabinelab.com/'
  },
  {
    id: 'cidadaomais',
    label: 'Cidadão+',
    description: 'pages.projects.cidadaomais',
    categories: ['mobile', 'web'],
    techs: [
      'React Native',
      'Vue',
      'TypeScript',
      'Bun',
      'Elysia',
      'PostgreSQL',
      'Drizzle ORM'
    ],
    repository: 'https://github.com/levisantosp/cidadaomais'
  }
]

export const contacts = [
  {
    icon: mail,
    href: 'mailto:mail@levisantos.dev'
  },
  {
    icon: github,
    href: 'https://github.com/levisantosp'
  },
  {
    icon: linkedin,
    href: 'https://www.linkedin.com/in/levisantosp'
  }
] as const
