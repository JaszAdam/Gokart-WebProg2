import { json } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';

const bookingsFilePath = path.resolve('static/booking.txt');

export const GET = async () => {
  try {
    const data = await fs.readFile(bookingsFilePath, 'utf-8');
    
    const bookings = data
      .split('\n')
      .filter(line => line.trim() !== '')
      .map(line => {
        const [name, date, time] = line.split(',');
        return { name, date, time };
      });
    
    return json(bookings);
  } catch (err) {
    return json([], { status: 500 });
  }
};

export const POST = async ({ request }) => {
  const booking = await request.json();

  try {
    const data = await fs.readFile(bookingsFilePath, 'utf-8');
    const existingBookings = data.split('\n').filter(line => line.trim() !== '');

    const isDuplicate = existingBookings.some(line => {
      const [name, date, time] = line.split(',');
      return date === booking.date && time === booking.time;
    });

    if (isDuplicate) {
      return json({ message: 'A választott időpont már foglalt!' }, { status: 400 });
    }

    const newBooking = `${booking.name.trim()},${booking.date.trim()},${booking.time.trim()}`;

    existingBookings.push(newBooking);

    await fs.writeFile(bookingsFilePath, existingBookings.join('\n') + '\n');

    return json({ message: 'Foglalás sikeres!' });
  } catch (err) {
    return json({ message: 'Hiba mentés közben!' }, { status: 500 });
  }
};
