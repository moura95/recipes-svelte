<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	const dispatch = createEventDispatcher();

	export let icon: string = '';
	export let size: 'small' | 'medium' | 'large' | 'extraLarge' = 'medium';
	export let color: 'default' | 'success' | 'dark' | 'danger' | 'warning' = 'default';

	const sizes = {
		small: 'text-xs',
		medium: 'text-base',
		large: 'text-2xl',
		extraLarge: 'text-3xl'
	};

	const colors = {
		default: 'text-white',
		success: 'text-green-500',
		dark: 'text-dark-2',
		danger: 'text-red-500',
		warning: 'text-yellow-500'
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<iconify-icon
	{icon}
	class={twMerge(`${sizes[size]}  ${colors[color]}`, $$props.class)}
	on:click={() => dispatch('click')}
/>
