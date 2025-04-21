import { json } from '@sveltejs/kit';
import fs from 'fs/promises';

const filePath = 'static/ratings.txt';

export async function GET() {
	try {
		const data = await fs.readFile(filePath, 'utf-8');
		return new Response(data);
	} catch {
		return new Response('', { status: 200 });
	}
}

export async function POST({ request }) {
	const { name, comment } = await request.json();
	const entry = `${name},${comment};\n`;
	await fs.appendFile(filePath, entry);
	return json({ success: true });
}
