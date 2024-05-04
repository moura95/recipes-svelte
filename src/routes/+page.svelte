<script lang="ts">
	import FoodCards from '$lib/components/food_cards.svelte';
	import FoodSearch from '$lib/components/food_search.svelte';
	import { onMount } from 'svelte';

	let recipes: any = [],
		search_value = '',
		ingredients = '',
		loading = false;

	async function fetchRecipes() {
		try {
			loading = true;
			const req = await fetch('/receitas');
			const res = await req.json();
			recipes = res.results;
		} catch (error) {
			console.log(error);
		} finally {
			loading = false;
		}
	}

	async function getIngredients() {
		try {
			loading = true;
			const req = await fetch('/ingredientes');
			const res = await req.json();
			ingredients = res.results;
		} catch (error) {
			console.log(error);
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchRecipes();
		getIngredients();
	});
</script>

<FoodSearch value={search_value} />
<FoodCards {recipes} {loading} />
