<script lang="ts">
    import { onMount } from 'svelte';
  
    export let refreshTrigger: number = 0;
    let bookings: { name: string; date: string; time: string }[] = [];
  
    onMount(async () => {
      const res = await fetch('/api/booking');
      const fetchedBookings = await res.json();
      bookings = fetchedBookings;
    });
  </script>
  
  <div class="booking-table">
    <h2>Foglalások</h2>
    <table>
      <thead>
        <tr>
          <th>Név</th>
          <th>Dátum</th>
          <th>Időpont</th>
        </tr>
      </thead>
      <tbody>
        {#each bookings as { name, date, time }}
          <tr>
            <td>{name}</td>
            <td>{date}</td>
            <td>{time}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
<style>
    .booking-table {
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}
  </style>
  