<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { Button } from 'flowbite-svelte';
	import Loading from '$lib/components/loading.svelte';

	let recipe: any = null,
		loading = true;

	async function fetchRecipeByID() {
		try {
			const req = await fetch(`/receitas/${$page.params.id}`);
			const res = await req.json();
			recipe = res.results;
		} catch (error) {
			console.log(error);
		} finally {
			loading = false;
		}
	}

	function formatDate(dateString: any) {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear().toString();
		const hour = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		return `${day}/${month}/${year} às ${hour}:${minutes}`;
	}

	onMount(async () => {
		await fetchRecipeByID();
	});
</script>

<section>
	{#if loading}
		<div class="flex items-center justify-center w-full h-[80vh]">
			<Loading msg="Carregando receita" />
		</div>
	{:else}
		<div class="flex items-center justify-between">
			<h1 class="text-center font-bold text-3xl text-gray-800 underline">{recipe?.receita}</h1>
			<span class="text-xs font-light underline">{formatDate(recipe?.created_at)}</span>
		</div>
		<div class="mt-5 flex justify-between gap-4">
			<img src={recipe?.link_imagem} alt={recipe?.receita} class="h-[450px] object-contain" />
			<div class="bg-gray-800 w-full" />
		</div>
		<h2 class="text-2xl font-semibold mt-5">Ingredientes</h2>
		<p class="font-light">{recipe?.ingredientes}</p>
		<h2 class="text-2xl font-semibold mt-5">Modo de preparo</h2>
		<p class="font-light">{recipe?.modo_preparo}</p>
		<div class="mt-5">
			<Button href="/">Ver mais receitas</Button>
		</div>
	{/if}
</section>
