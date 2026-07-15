<script lang="ts">
	import { resolve } from '$app/paths'
	import { page } from '$app/state'
	import type { Pathname } from '$app/types'
	import favicon from '$lib/assets/favicon.ico'
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger
	} from '$lib/components/ui/select'
	import './layout.css'
	import { m } from '$lib/paraglide/messages'
	import {
		getLocale,
		locales,
		localizeHref,
		setLocale
	} from '$lib/paraglide/runtime'
	import { Copyright, Languages } from '@lucide/svelte'
	import { contacts, name } from '@/config'

	let { children } = $props()

	const navItems = $derived([
		{
			label: m['header.about'](),
			href: '/#about'
		},
		{
			label: m['header.techs'](),
			href: '/#techs'
		},
		{
			label: m['header.projects'](),
			href: '/projects'
		}
	] as const)

	const languages = [
		{
			label: 'English',
			value: 'en-us'
		},
		{
			label: 'Português',
			value: 'pt-br'
		}
	] as const
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{m['metadata.title']()}</title>
	<meta name="description" content={m['metadata.description']()} />
</svelte:head>

<main class="min-h-screen flex flex-col">
	<header class="relative flex justify-center items-center h-20 px-5">
		<div class="flex gap-5">
			{#each navItems as item (item.href)}
				<a href={item.href}>
					<span
						class="transition-colors hover:text-blue-500 md:text-xl text-sm"
					>
						{item.label}
					</span>
				</a>
			{/each}
		</div>
		<div class="absolute right-5 flex items-center">
			<Select
				type="single"
				value={getLocale()}
				onValueChange={(v) => setLocale(v as never)}
			>
				<SelectTrigger
					class="cursor-pointer border-none bg-transparent p-0 hover:bg-transparent focus-visible:ring-0 [&>svg:last-child]:hidden"
				>
					<Languages class="size-7 md:size-8" />
				</SelectTrigger>
				<SelectContent
					align="end"
					side="bottom"
					sideOffset={4}
					class="rounded-xl min-w-32"
				>
					{#each languages as lang (lang.value)}
						<SelectItem value={lang.value} class="cursor-pointer rounded-full">
							{lang.label}
						</SelectItem>
					{/each}
				</SelectContent>
			</Select>
		</div>
	</header>

	<div class="flex-1">
		{@render children?.()}
	</div>

	<footer class="bg-primary/5 mt-30">
		<div
			class="mx-auto flex max-w-full flex-col gap-8 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-15 md:py-10 xl:px-30"
		>
			<div class="flex flex-col gap-1">
				<h1 class="md:text-2xl text-lg font-semibold">{name}</h1>
				<h2 class="md:text-xl font-semibold text-muted-foreground">
					{m['pages.home.role']()}
				</h2>
				<div class="flex justify-center md:justify-start gap-4">
					{#each contacts as item}
						{@const Icon = item.icon}
						<a
							href={item.href}
							rel="noreferrer"
							target="_blank"
							class="transition-colors hover:text-blue-500"
						>
							<Icon width="30" height="30" />
						</a>
					{/each}
				</div>
			</div>
			<div class="flex items-center gap-2">
				<Copyright size={20} />
				<span>
					{new Date().getFullYear()} Levi Santos Pires — All rights reserved.
				</span>
			</div>
		</div>
	</footer>
</main>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>
			{locale}
		</a>
	{/each}
</div>
