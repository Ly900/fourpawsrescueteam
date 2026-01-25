import {
	loadsAllCats,
	getSeniorCats,
	createSeniorCats,
} from './senior-cats.js';

async function main() {
	console.clear();
	const data = await loadsAllCats();
	const seniorCats = getSeniorCats(data);
	const customSeniorCats = createSeniorCats(seniorCats);
	console.log(customSeniorCats);
	console.log(customSeniorCats.length);
}

main();
