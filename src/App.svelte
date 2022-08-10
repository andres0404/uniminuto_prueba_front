<script>
	export let name;
	import Form from "./components/Form.svelte";
	import Grilla from "./components/Grilla.svelte";
	
</script>

<main>
	<h1>{name}!</h1>
	<p>Por favor agregue al trabajador</p>
	<Form  />
	<Grilla />
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>