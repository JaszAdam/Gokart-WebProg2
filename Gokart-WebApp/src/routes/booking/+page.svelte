<script>
    import Header from "$lib/components/Header.svelte";
    import BookingInput from '$lib/components/BookingInput.svelte';
	import BookingOutput from '$lib/components/BookingOutput.svelte';

	let refreshTrigger = 0;

    function handleRefresh() {
    refreshTrigger += 1;
    }

</script>

<Header />
<h1>Időpontfoglalás</h1>

<BookingInput on:refresh={handleRefresh} />
<BookingOutput {refreshTrigger} />