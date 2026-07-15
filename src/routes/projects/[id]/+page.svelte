<script lang="ts">
  import { resolve } from '$app/paths'
  import { page } from '$app/state'
  import { error } from '@sveltejs/kit'
  import { projects, type StaticMessageKeys } from '@/config'
  import { Badge } from '@/lib/components/ui/badge'
  import { Button } from '@/lib/components/ui/button'
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '@/lib/components/ui/card'
  import { m } from '@/lib/paraglide/messages'

  const project = projects.find((p) => p.id === page.params.id)

  if (!project) {
    error(404, 'Not found')
  }
</script>

<div class="flex h-full items-center justify-center px-6">
  <Card class="w-full max-w-md">
    <CardHeader class="flex justify-between">
      <div class="flex flex-col gap-2">
        <CardTitle class="md:text-2xl text-xl">{project.label}</CardTitle>
        <CardDescription class="md:text-base">
          {m[project.description as StaticMessageKeys]()}
        </CardDescription>
      </div>

      <img
        src={`/${project.id}.png`}
        width="50"
        height="50"
        alt={project.label}
        class="rounded-md"
      />
    </CardHeader>

    <CardContent class="flex flex-wrap gap-4">
      <CardTitle>{m['header.techs']()}</CardTitle>
      <CardDescription class="flex flex-wrap gap-2">
        {#each project.techs as item}
          <Badge variant="outline">
            <span class="md:text-base text-sm">{item}</span>
          </Badge>
        {/each}
      </CardDescription>
    </CardContent>

    <CardFooter class="mt-auto flex flex-wrap gap-2">
      <Button variant="secondary" class="rounded-full cursor-pointer">
        <a href={project.repository} target="_blank" rel="noreferrer">
          {m['pages.projects.visit.repository']()}
        </a>
      </Button>

      {#if project.website}
        <Button variant="secondary" class="rounded-full cursor-pointer">
          <a href={project.website} target="_blank" rel="noreferrer">
            {m['pages.projects.visit.website']()}
          </a>
        </Button>
      {/if}
    </CardFooter>
  </Card>
</div>
