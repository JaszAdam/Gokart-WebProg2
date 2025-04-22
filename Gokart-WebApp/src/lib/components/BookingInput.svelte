<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    let name = '';
    let selectedDate = '';
    let selectedTime = '';
    let errorMessage = '';
  
    async function submitBooking() {
      if (!name.trim()) {
        errorMessage = 'Kérem adja meg a nevét!';
        return;
      }
  
      if (selectedDate && selectedTime) {
        const booking = {
          name,
          date: selectedDate,
          time: selectedTime
        };
  
        const res = await fetch('/api/booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(booking)
        });

        const result = await res.json();

        if (result.message === 'A választott időpont már foglalt!') {
          errorMessage = result.message;
        } else {
          name = '';
          selectedDate = '';
          selectedTime = '';
          errorMessage = '';
          dispatch('refresh');
        }
      } else {
        errorMessage = 'Válasszon dátumot és időpontot!';
      }
    }
</script>

<div class="booking-form">
    <input type="text" bind:value={name} placeholder="Név" />
    <input type="date" bind:value={selectedDate} />
    <select bind:value={selectedTime}>
      <option value="">Időpont</option>
      {#each Array(6) as _, index}
        <option value="{12 + index}:00">{12 + index}:00</option>
      {/each}
    </select>
    {#if errorMessage}
      <p class="error">{errorMessage}</p>
    {/if}
    <button on:click={submitBooking}>Foglalás</button>
</div>

<style>
  .booking-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .error {
    color: red;
    font-size: 0.9rem;
  }
</style>
