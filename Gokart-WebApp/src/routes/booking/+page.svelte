<script>
    import Header from "$lib/components/Header.svelte";
    import BookingInput from '$lib/components/BookingInput.svelte';
	import BookingOutput from '$lib/components/BookingOutput.svelte';
    import Weather from "$lib/components/Weather.svelte";

	let refreshTrigger = 0;

    function handleRefresh() {
    refreshTrigger += 1;
    }

</script>

<Header />
<Weather />


<BookingInput on:refresh={handleRefresh} />
<BookingOutput {refreshTrigger} />