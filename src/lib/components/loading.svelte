<script>
	import Icon from './ui/icon.svelte';

	export let msg = '';
</script>

<div class="flex flex-col gap-2 items-center">
	<h1 class="font-bold">{msg}</h1>
	<Icon icon="line-md:loading-loop" class="text-[4rem] text-primary-700" />
</div>
