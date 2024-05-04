<script>
	import { Label, ButtonGroup, InputAddon, Input, Button } from 'flowbite-svelte';
	import Icon from './ui/icon.svelte';

	export let value = '',
		search_title = 'Pesquisa geral';
</script>

<section>
	<Label for="input-addon" class="mb-2">{search_title}</Label>
	<ButtonGroup class="w-full">
		<InputAddon>
			<Icon icon="fluent:food-16-filled" class="text-black" />
		</InputAddon>
		<Input
			id="input-addon"
			type="text"
			placeholder="Procure uma receita, um ingrediente, uma categoria..."
			class="focus:ring-0"
			bind:value
		/>
		<Button color="primary">Pesquisar</Button>
	</ButtonGroup>
</section>
