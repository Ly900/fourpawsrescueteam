// This whole file can be copied and pasted into the browser to fetch from the ShelterLuv API and ultimately create new senior cat objects. However, since it is in the browser, it cannot be saved to file. This can be use for testing.

const API_URL =
	'https://new.shelterluv.com/api/v3/available-animals/531?embedded=1&iframeId=shelterluv_wrap_1735398287&columns=1'; // <-- replace with your URL

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
	const seniorCats = data.animals.filter((cat) => {
		return cat.age_group?.name === 'Senior';
	});

	return seniorCats;
}

async function loadAllCats() {
	try {
		const response = await fetch(API_URL);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return (data = await response.json());
	} catch (error) {
		console.error('Fetch failed:', error);
	}
}

// Run it
async function main() {
	const data = await loadAllCats();
	const seniorCats = getSeniorCats(data);
	const customSeniorCats = createSeniorCats(seniorCats);
	console.log(customSeniorCats);
	console.log(customSeniorCats.length);
}

main();
