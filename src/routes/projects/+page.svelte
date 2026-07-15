<script lang="ts">
  import { Badge } from '$lib/components/ui/badge'
  import { Button } from '$lib/components/ui/button'
  import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '$lib/components/ui/card'
  import { m } from '$lib/paraglide/messages'
  import { projects as rawProjects } from '@/config'

  const projects = $derived(
    rawProjects.map((p) => ({
      ...p,
      description: m[p.description]()
    }))
  )
</script>

<div class="flex flex-col justify-center items-center gap-20 px-6 md:px-30">
  <h1
    class="text-center relative w-fit text-3xl md:text-5xl font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-blue-500 after:rounded-full"
  >
    {m['header.projects']()}
  </h1>

  <div class="flex w-full flex-wrap justify-center gap-5">
    {#each projects as item}
      <Card class="w-full max-w-md">
        <CardHeader>
          <div class="flex flex-wrap gap-2 justify-between items-center">
            <CardTitle>
              <a
                href={`/projects/${item.id}`}
                class="transition-colors hover:text-blue-500"
              >
                {item.label}
              </a>
            </CardTitle>

            <div class="flex flex-wrap gap-1">
              {#each item.categories as category}
                <Badge variant="outline">
                  {m[`pages.projects.type.${category}`]()}
                </Badge>
              {/each}
            </div>
          </div>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>

        <CardFooter class="mt-auto flex flex-wrap gap-2">
          <Button variant="secondary" class="rounded-full cursor-pointer">
            <a href={item.repository} target="_blank" rel="noreferrer">
              {m['pages.projects.visit.repository']()}
            </a>
          </Button>

          {#if item.website}
            <Button variant="secondary" class="rounded-full cursor-pointer">
              <a href={item.website} target="_blank" rel="noreferrer">
                {m['pages.projects.visit.website']()}
              </a>
            </Button>
          {/if}
        </CardFooter>
      </Card>
    {/each}
  </div>
</div>
