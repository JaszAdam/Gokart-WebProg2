<script>
    import Header from "$lib/components/Header.svelte";
    import RatingInput from "$lib/components/RatingInput.svelte";
    import RatingOutput from "$lib/components/RatingOutput.svelte";
</script>


<Header />
<h1>Mondja el mit gondol</h1>
<RatingInput />
<RatingOutput />

<style>
    h1{
        text-align: center;
    }
</style>