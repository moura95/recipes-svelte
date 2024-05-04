<script>
	import Logo from './logo.svelte';
</script>

<footer class="w-full h-[200px] bg-gray-200 flex justify-center items-center flex-col gap-5">
	<div class="flex gap-6 items-center">
		<hr class="h-[2px] bg-primary-600 w-[600px]" />
		<Logo />
		<hr class="h-[2px] bg-primary-600 w-[600px]" />
	</div>
	<div class="flex gap-6">
		<a href="" class="font-thin text-sm hover:underline">Quem somos</a>
		<a href="" class="font-thin text-sm hover:underline">Contato</a>
		<a href="" class="font-thin text-sm hover:underline">Política de privacidade</a>
	</div>
	<p class="font-light text-gray-600">
		&copy; {new Date().getFullYear()} - Todos os direitos reservados
	</p>
</footer>
