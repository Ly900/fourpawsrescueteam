import fs from 'fs/promises';

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
