/**	This code goes inside a WP snippet */
(function () {
	if (window.innerWidth >= 1001) {
		return;
	}

	var contactBlock = document.createElement('div');
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

	var nav = document.getElementById('primary-site-navigation');
	if (nav) nav.insertAdjacentElement('afterend', contactBlock);
})();
