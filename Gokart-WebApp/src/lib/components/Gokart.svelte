<script lang="ts">
	import { onMount } from 'svelte';

	interface Gokart {
		label: string;
		name: string;
		description: string;
		image: string;
	}

	let gokarts: Gokart[] = [];

	onMount(async () => {
		const res = await fetch('/gokarts.txt');
		const text = await res.text();

		gokarts = text
			.trim()
			.split(';')
			.filter(line => line.trim() !== '')
			.map(line => {
				const [label, name, description, image] = line.split(',');
				return { label, name, description, image };
			});
	});
</script>

<div class="gokart-row">
	{#each gokarts as gokart}
		<div class="gokart">
			<div class="text">
				<h3>{gokart.label}</h3>
				<h2>{gokart.name}</h2>
				<p>{gokart.description}</p>
			</div>
            <img src={gokart.image} alt={gokart.name} />
		</div>
	{/each}
</div>

<style>
	.gokart-row {
		display: flex;
		flex-direction: column; 
		justify-content: center; 
		align-items: center; 
		margin-top: 2rem;
		padding: 1rem;
	}

	.gokart {
		display: flex;
		flex-direction: row; 
		align-items: center;
		justify-content: center; 
		padding: 1rem;
		gap: 1.5rem;
		max-width: 900px;
		width: 100%;
		margin-bottom: 2rem;
	}

	.gokart img {
		width: 400px;
		height: 250px;
		border-radius: 6px;
		object-fit: cover;
	}

	.text {
		text-align: left;
	}

	h3 {
		font-size: 0.9rem;
		color: #555;
		margin: 0;
	}

	h2 {
		margin: 0.2rem 0;
		font-size: 1.4rem;
		color: #222;
	}

	p {
		color: #4d4d4d;
	}
</style>




