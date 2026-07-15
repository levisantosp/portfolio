<script>
	import { m } from '$lib/paraglide/messages'
	import { contacts, name } from '@/config'
</script>

<div
	class="flex min-h-dvh flex-col justify-between items-center md:items-start p-6 md:p-10"
>
	<div class="flex flex-col justify-center gap-5 my-auto">
		<h1 class="text-3xl font-semibold">
			{m['pages.home.greetings']()}
		</h1>

		<h2 class="text-5xl font-semibold md:text-8xl">
			{@html m['pages.home.im']({
				name: `<span class="text-blue-500 font-extra">${name}</span>`
			})}
		</h2>

		<h2 class="text-xl font-semibold text-muted-foreground">
			{m['pages.home.role']()}
		</h2>
	</div>

	<div class="flex justify-center gap-4 mb-20">
		{#each contacts as item}
			{@const Icon = item.icon}
			<a
				href={item.href}
				rel="noreferrer"
				target="_blank"
				class="transition-colors hover:text-blue-500"
			>
				<Icon class="size-7 md:size-8" />
			</a>
		{/each}
	</div>
</div>
