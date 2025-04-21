<script lang="ts">
	let name = '';
	let comment = '';

	async function submitRating() {
		if (name.trim() && comment.trim()) {
			await fetch('/api/ratings', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, comment })
			});
			name = '';
			comment = '';
		}
	}
</script>

<div class="ratinginput">
	<input type="text" bind:value={name} placeholder="Név" />
	<textarea bind:value={comment} placeholder=""></textarea>
	<button on:click={submitRating}>Küldés</button>
</div>

<style>
	.ratinginput {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 500px;
		margin: 0 auto;
	}
	input, textarea {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	button {
		padding: 0.5rem;
		cursor: pointer;
	}
</style>
