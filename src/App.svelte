<script lang="ts">
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>