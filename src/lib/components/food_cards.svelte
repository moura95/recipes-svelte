<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import Loading from './loading.svelte';

	export let recipes: any = [],
		loading = false;
</script>

<section class="mt-3 flex gap-8 flex-wrap justify-between">
	{#if loading}
		<div class="flex items-center justify-center w-full h-[80vh]">
			<Loading msg="Carregando receitas..." />
		</div>
	{:else}
		<div class="w-full h-[200px] bg-gray-800" />
		{#each recipes as food}
			<Card
				href={`/receitas/${food.id}`}
				class="w-[320px] h-[360px] flex flex-col justify-between"
				padding="none"
			>
				<img src={food.link_imagem} alt={food.receita} class="h-[200px]" />
				<div class="p-5">
					<div class="flex flex-col gap-1 mb-2">
						<h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
							{food.receita}
						</h5>
						<p class="font-normal text-gray-700 leading-tight text-sm max-w-[250px] truncate">
							{food.ingredientes}
						</p>
					</div>
					<Button>Ver mais</Button>
				</div>
			</Card>
		{/each}
		<div class="w-full h-[200px] bg-gray-800" />
	{/if}
</section>
