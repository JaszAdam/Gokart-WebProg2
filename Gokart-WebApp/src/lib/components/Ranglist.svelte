<script lang="ts">
	import { onMount } from 'svelte';

	interface Entry {
		rank: string;
		name: string;
		time: string;
		date: string;
		timeMs: number;
	}

	let entries: Entry[] = [];

	function parseTimeToMs(time: string): number {
		const [minutes, seconds] = time.split(':');
		return parseInt(minutes) * 60 * 1000 + parseFloat(seconds) * 1000;
	}

	onMount(async () => {
		const res = await fetch('/ranglist.txt');
		const text = await res.text();

		entries = text
			.trim()
			.split(';')
			.filter(line => line.trim() !== '')
			.map(line => {
				const [name, time, date] = line.split(',');
				return {
					rank: '', 
					name,
					time,
					date,
					timeMs: parseTimeToMs(time)
				};
			})
			.sort((a, b) => a.timeMs - b.timeMs)
			.map((entry, index) => ({
				...entry,
				rank: `#${index + 1}`
			}));
	});
</script>

<table>
    <thead>
        <tr>
            <th>Helyezés</th>
            <th>Név</th>
            <th>Idő</th>
            <th>Dátum</th>
        </tr>
    </thead>
    <tbody>
        {#each entries as entry}
            <tr>
                <td>{entry.rank}</td>
                <td>{entry.name}</td>
                <td>{entry.time}</td>
                <td>{entry.date}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        width: 70%;
        border-collapse: collapse;
        margin-top: 2rem;
		margin-left: auto;
    	margin-right: auto;
    }

    th, td {
        border: 1px solid #ccc;
        padding: 0.5rem;
        text-align: center;
    }

    th {
        background-color: #f0f0f0;
    }
</style>
