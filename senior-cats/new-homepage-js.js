document.addEventListener('DOMContentLoaded', () => {
	const originalLogo = document.querySelector('.charity-fundraiser-logo');
	const toggleMenu = document.querySelector('.toggle-menu');

	if (!originalLogo || !toggleMenu) return;

	// Clone the logo
	const clonedLogo = originalLogo.cloneNode(true);

	// Optional helper class
	clonedLogo.classList.add('mobile-logo-clone');

	// Insert clone as first child of toggle menu
	toggleMenu.insertBefore(clonedLogo, toggleMenu.firstChild);

	// Mobile-first default state
	originalLogo.style.display = 'none';
	clonedLogo.style.display = '';

	function handleDesktopLogo() {
		if (window.innerWidth >= 1001) {
			originalLogo.style.display = 'flex';
			clonedLogo.style.display = 'flex';
		} else {
			originalLogo.style.display = 'none';
			clonedLogo.style.display = 'flex';
		}
	}

	// Run on resize
	window.addEventListener('resize', handleDesktopLogo);
});
