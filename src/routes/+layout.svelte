<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.pcss';
	import 'iconify-icon';

	let y: any;
	$: isFixed = y > 0;
</script>

<svelte:window bind:scrollY={y} />

<main class="w-full overflow-y-auto">
	<header class="border-b shadow-b-lg">
		<Header fixed={isFixed} />
	</header>
	<div class="min-[1080px]:w-[1080px] min-[1080px]:m-auto max-[1080px]:px-3 py-5">
		<slot />
	</div>
	<Footer />
</main>
