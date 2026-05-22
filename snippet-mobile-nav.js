(function () {
	// Inserts an email/phone block after the primary nav inside the mobile side menu.
	function moveContactBlock() {
		const contactBlock = document.createElement('div');
		contactBlock.classList.add('mobile-nav-footer');
		contactBlock.innerHTML = `
	<div class="mobile-nav-footer__item">
		<p class="mobile-nav-footer__label"><strong>Email:</strong></p>
		<a class="mobile-nav-footer__link" href="mailto:info@fourpaws.org">info@fourpaws.org</a>
	</div>
	<div class="mobile-nav-footer__item">
		<p class="mobile-nav-footer__label"><strong>Phone:</strong></p>
		<a class="mobile-nav-footer__link" href="tel:7037156369">703-715-6369</a>
	</div>
  `;

		const nav = document.getElementById('primary-site-navigation');
		if (nav) nav.insertAdjacentElement('afterend', contactBlock);
	}

	// Appends a Donate button to the mobile menu bar. The desktop .donate-link is hidden via CSS below 1001px.
	function moveDonateButton() {
		const donateButton = document.createElement('a');
		donateButton.classList.add('mobile-nav-donate-button');
		donateButton.href = 'https://givebutter.com/4Paws';
		donateButton.textContent = 'Donate';
		donateButton.target = '_blank';

		const toggleMenu = document.querySelector('.toggle-menu');
		if (toggleMenu) toggleMenu.appendChild(donateButton);
	}

	function init() {
		moveContactBlock();
		moveDonateButton();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
