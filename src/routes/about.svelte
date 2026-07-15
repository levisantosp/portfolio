<script>
	import { m } from '$lib/paraglide/messages'
</script>

<div
	class="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 md:justify-between"
	id="about"
>
	<h1
		class="relative w-fit text-3xl md:text-5xl font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-blue-500 after:rounded-full"
	>
		{m['pages.home.about.title']()}
	</h1>

	<p class="md:text-xl text-muted-foreground max-w-prose">
		{m['pages.home.about.description']()}
	</p>
</div>
