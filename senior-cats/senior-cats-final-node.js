// This file can be run as a script using Node in order to save the newly created data to a file.

import fetch from 'node-fetch';
import fs from 'fs';

const API_URL =
	'https://new.shelterluv.com/api/v3/available-animals/531?embedded=1&embedded=1';

function createSeniorCats(seniorCats) {
	const BASE_URL =
		'https://fourpaws.org/adopt-a-cat/available-cats/#sl_embed&page=shelterluv_wrap_1735398287%2Fembed%2Fanimal%2F';

	return seniorCats.map((cat) => ({
		nid: cat.nid,
		name: cat.name.replace(/\(.*?\)/g, '').trim(),
		age: cat.age_group?.age_from ?? null,
		photo: cat.photos?.[0]?.url ?? null,
		url: `${BASE_URL}${cat.nid}`,
	}));
}

function getSeniorCats(data) {
	return data.animals.filter((cat) => cat.age_group?.name === 'Senior');
}

function getDateStamp() {
	const now = new Date();

	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}

async function main() {
	const res = await fetch(API_URL);
	const data = await res.json();

	const seniorCats = getSeniorCats(data);
	const customSeniorCats = createSeniorCats(seniorCats);

	const dateStamp = getDateStamp();

	const filename = `senior-cats/data/senior-cats-${dateStamp}.json`;

	fs.writeFileSync(filename, JSON.stringify(customSeniorCats, null, 2));

	console.log(`File saved: ${filename}`);
}

main();
