<script lang="ts">
	import { onMount } from 'svelte';

	let ratings: { name: string; comment: string }[] = [];

	onMount(async () => {
		const res = await fetch('/api/ratings');
		const text = await res.text();
		ratings = text
			.trim()
			.split(';')
			.filter(line => line.trim())
			.map(line => {
				const [name, comment] = line.split(',');
				return { name, comment };
			});
	});
</script>

<div class="ratinglist">
	<h2>Vélemények</h2>
	{#each ratings as rating}
		<div class="rating">
			<strong>{rating.name}</strong>
			<p>{rating.comment}</p>
		</div>
	{/each}
</div>

<style>
	.ratinglist {
		max-width: 600px;
		margin: 2rem auto;
	}
	.rating {
		padding: 1rem;
		border-bottom: 1px solid #ccc;
	}
</style>
