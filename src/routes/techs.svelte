<script lang="ts">
  import { Badge } from '$lib/components/ui/badge'
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
  } from '$lib/components/ui/card'
  import { m } from '$lib/paraglide/messages'

  const techs = {
    front: [
      'React Native',
      'React',
      'Svelte',
      'Vue',
      'Next.js',
      'Nuxt',
      'Tailwind CSS'
    ],
    back: [
      'JavaScript',
      'TypeScript',
      'Bun',
      'Node.js',
      'PostgreSQL',
      'Mongo DB',
      'Drizzle ORM',
      'Prisma ORM'
    ]
  } as const
</script>

<div
  id="techs"
  class="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-24"
>
  <h1
    class="relative w-fit text-3xl md:text-5xl font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-blue-500 after:rounded-full"
  >
    {m['header.techs']()}
  </h1>

  <div class="flex flex-col gap-5 max-w-prose">
    <Card class="max-w-md md:max-w-7xl">
      <CardHeader>
        <CardTitle class="text-2xl md:text-3xl">Front-end</CardTitle>
      </CardHeader>

      <CardContent class="flex flex-wrap gap-2">
        {#each techs.front as item}
          <Badge variant="secondary">
            <span class="md:text-xl text-sm">{item}</span>
          </Badge>
        {/each}
      </CardContent>
    </Card>

    <Card class="max-w-md md:max-w-7xl">
      <CardHeader>
        <CardTitle class="text-2xl md:text-3xl">Back-end</CardTitle>
      </CardHeader>

      <CardContent class="flex flex-wrap gap-2">
        {#each techs.back as item}
          <Badge variant="secondary">
            <span class="md:text-xl text-sm">{item}</span>
          </Badge>
        {/each}
      </CardContent>
    </Card>
  </div>
</div>
