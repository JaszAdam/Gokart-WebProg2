import { json } from '@sveltejs/kit';
import { OPENWEATHER_API_KEY } from '$env/static/private';

export const GET = async ({ url }) => {
	const lat = url.searchParams.get('lat');
	const lon = url.searchParams.get('lon');

	if (!lat || !lon) {
		return json({ error: 'Hiányzó koordináták' }, { status: 400 });
	}

	const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=hu`);

	if (!res.ok) {
		return json({ error: 'Nem sikerült lekérni az adatokat.' }, { status: 500 });
	}

	const data = await res.json();
	return json(data);
};
