function getRandomSeniorCats(cats, count = 3) {
	const shuffled = [...cats].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, count);
}

function getThreeRandom() {
	if (!window.seniorCats || !Array.isArray(window.seniorCats)) {
		console.error('Senior cats data not loaded');
		return [];
	}

	return getRandomSeniorCats(window.seniorCats, 3);
}

function renderCatCard(cat) {
	return `
    <div class="senior-cat">
		<h3>
			<a href="${cat.url}" target="_blank" rel="noopener">${cat.name}</a>
		</h3>
		<p>Age: ${cat.age}</p>
		<img src="${cat.photo}" alt="${cat.name}" loading="lazy" class="senior-cat__image" />
    </div>
  `;
}

function renderCatGrid(cats) {
	const cards = cats.map(renderCatCard).join('');

	return `
      ${cards}
  `;
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
	const threeCats = getThreeRandom();
	console.log('Featured seniors:', threeCats);

	// Render UI here next
	const html = renderCatGrid(threeCats);
	const container = document.getElementById('senior-cats');

	if (!container) {
		console.error('#senior-cats container not found');
		return;
	}

	container.innerHTML = '';
	container.insertAdjacentHTML('beforeend', html);
});
