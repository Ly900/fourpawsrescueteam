import fs from 'fs/promises';

function getRandomSeniorCats(cats, count = 3) {
	const shuffled = [...cats].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, count);
}

async function getThreeRandom() {
	console.clear();
	const fileUrl = new URL(
		'../data/senior-cats-2026-01-25.json',
		import.meta.url,
	);

	const raw = await fs.readFile(fileUrl, 'utf8');
	const data = JSON.parse(raw);

	const featuredCats = getRandomSeniorCats(data);

	console.log(featuredCats);
}

async function main() {
	await getThreeRandom();
}

main();
