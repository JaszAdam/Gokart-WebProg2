<script lang="ts">
	import { onMount } from 'svelte';

	let weather: any = null;

	onMount(async () => {
		const res = await fetch('/api/weather?lat=46.0727&lon=18.2323'); 
		weather = await res.json();
	});
</script>

{#if weather}
<img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
    alt={weather.current.weather[0].description}
    width="30"
    height="30"
/>
<p>{weather.current.weather[0].description} | {weather.current.temp} °C</p>
{:else}
	<p>Töltés...</p>
{/if}
