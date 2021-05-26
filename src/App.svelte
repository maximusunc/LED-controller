<script lang="ts">
	export let name: string;
	import Picker from 'vanilla-picker';

	let el;

	$: new Picker({
		parent: el,
		popup: false,
		alpha: false,
		editorFormat: 'rgb',
		onDone: (color) => {
			const [r, g, b] = color.rgba;
			const data = {
				r,
				g,
				b,
			};
			fetch('/api/change', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data), 
			})
				.then((res) => {
					// console.log(res.status);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	});
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div bind:this={el} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	div {
		width: 200px;
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