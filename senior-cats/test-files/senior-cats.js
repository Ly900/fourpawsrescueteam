import fs from 'fs/promises';

function calculateAgeYears(birthdaySeconds) {
	if (!birthdaySeconds || birthdaySeconds === '0') return null;

	const birthDate = new Date(Number(birthdaySeconds) * 1000);
	const today = new Date();

	let age = today.getFullYear() - birthDate.getFullYear();

	const monthDiff = today.getMonth() - birthDate.getMonth();
	const dayDiff = today.getDate() - birthDate.getDate();

	if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
		age--;
	}

	return age;
}

export function createSeniorCats(seniorCats) {
	const BASE_URL =
		'https://fourpaws.org/adopt-a-cat/available-cats/#sl_embed&page=shelterluv_wrap_1735398287%2Fembed%2Fanimal%2F';

	return seniorCats.map((cat) => {
		const ageYears = calculateAgeYears(cat.birthday);

		return {
			nid: cat.nid,
			name: cat.name.replace(/\(.*?\)/g, '').trim(),
			age: ageYears,
			photo: cat.photos?.[0]?.url ?? null,
			url: `${BASE_URL}${cat.nid}`,
		};
	});
}

export function getSeniorCats(data) {
	const seniorCats = data.animals.filter((cat) => {
		return cat.age_group?.name === 'Senior';
	});

	return seniorCats;
}

export async function loadAllCats() {
	try {
		const file = await fs.readFile(
			'./senior-cats/test-files/all-cats.json',
			'utf8',
		);
		const json = JSON.parse(file);

		return json;
	} catch (error) {
		console.error('Error loading senior cats:', error);
	}
}

async function main() {
	console.clear();
	const data = await loadAllCats();
	const seniorCats = getSeniorCats(data);
	const customSeniorCats = createSeniorCats(seniorCats);
	console.log(customSeniorCats);
	console.log(customSeniorCats.length);
}

main();
