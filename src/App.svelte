<script>
	import { onMount } from "svelte";
	export let name;
	import Form from "./components/Form.svelte";
	import Grilla from "./components/Grilla.svelte";
import { data_grilla } from "./store";

	let data;
	const API = `http://localhost:8001/empleados`;

	onMount(async () =>  {
		const response = await fetch(API);
		data = await response.json();
		console.log(data);
		data_grilla.set(data);
	})
	
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