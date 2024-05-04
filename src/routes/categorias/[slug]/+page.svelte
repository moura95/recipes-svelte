<script lang="ts">
	import FoodCards from '$lib/components/food_cards.svelte';
	import FoodSearch from '$lib/components/food_search.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let recipes: any = [],
		search_value = '',
		loading = false;

	async function fetchRecipesByType() {
		try {
			loading = true;
			const req = await fetch(`/categorias/${$page.params.slug}`);
			const res = await req.json();
			recipes = res.results;
			console.log('🚀 ~ fetchRecipesByType ~ recipes:', recipes);
		} catch (error) {
			console.log(error);
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchRecipesByType();
	});
</script>

<FoodSearch value={search_value} search_title={`Pesquisar ${$page.params.slug}s`} />
<FoodCards {recipes} {loading} />
