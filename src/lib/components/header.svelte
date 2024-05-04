<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import Logo from './logo.svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	export let fixed = false;
</script>

{#if !fixed}
	<div in:fade={{ duration: 100 }}>
		<Navbar class="min-[1080px]:w-[1080px] min-[1080px]:m-auto">
			<NavBrand href="/">
				<Logo />
			</NavBrand>
			<NavHamburger />
			<NavUl ulClass="flex gap-4 py-3 font-bold flex-col md:flex-row">
				<NavLi href="/" class="uppercase text-xs text-center">Todas as receitas</NavLi>
				<NavLi
					href="/categorias/doce"
					class={`uppercase text-xs text-center ${
						$page.url.pathname === '/categorias/doce' && 'text-primary-700'
					}`}>Doces e Sobremesas</NavLi
				>
				<NavLi href="/" class="uppercase text-xs text-center">Carnes</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Aves</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Frutos do Mar</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Saladas e Molhos</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Sopas</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Massas</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Bebidas</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Lanches</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Alimentacao Saudavel</NavLi>
			</NavUl>
		</Navbar>
	</div>
{:else}
	<div in:fade={{ duration: 100 }}>
		<Navbar class="w-full fixed shadow-xl">
			<NavBrand href="/">
				<Logo />
			</NavBrand>
			<NavHamburger />
			<NavUl ulClass="flex gap-4 py-3 font-bold flex-col md:flex-row">
				<NavLi href="/" class="uppercase text-xs text-center">Todas as receitas</NavLi>
				<NavLi
					href="/categorias/doce"
					class={`uppercase text-xs text-center ${
						$page.url.pathname === '/categorias/doce' && 'text-primary-700'
					}`}>Doces e Sobremesas</NavLi
				>
				<NavLi href="/" class="uppercase text-xs text-center">Carnes</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Aves</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Frutos do Mar</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Saladas e Molhos</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Sopas</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Massas</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Bebidas</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Lanches</NavLi>
				<NavLi href="/" class="uppercase text-xs text-center">Alimentacao Saudavel</NavLi>
			</NavUl>
		</Navbar>
	</div>
{/if}
