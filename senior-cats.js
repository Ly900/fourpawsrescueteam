import fs from 'fs/promises';

export function createSeniorCats(seniorCats) {
	const BASE_URL =
		'https://fourpaws.org/adopt-a-cat/available-cats/#sl_embed&page=shelterluv_wrap_1735398287%2Fembed%2Fanimal%2F';

	return seniorCats.map((cat) => ({
		nid: cat.nid,
		name: cat.name,
		age: cat.age_group?.age_from ?? null,
		photo: cat.photos?.[0]?.url ?? null,
		url: `${BASE_URL}${cat.nid}`,
	}));
}

export function getSeniorCats(data) {
	const seniorCats = data.animals.filter((cat) => {
		return cat.age_group?.name === 'Senior';
	});

	return seniorCats;
}

export async function loadsAllCats() {
	try {
		const file = await fs.readFile('./all-cats.json', 'utf8');
		const json = JSON.parse(file);

		return json;
	} catch (error) {
		console.error('Error loading senior cats:', error);
	}
}
