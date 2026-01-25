import { loadsAllCats, getSeniorCats } from './senior-cats.js';

async function main() {
	const data = await loadsAllCats();
	const seniorCats = getSeniorCats(data);
	console.log(seniorCats);
}

main();
