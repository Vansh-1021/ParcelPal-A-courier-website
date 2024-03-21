const toggleMenu = () => {
	const menu = document.querySelector('nav ul');
	menu.classList.toggle('show');
};

const navLinks = document.querySelectorAll('nav ul li');
navLinks.forEach(link => link.addEventListener('click', toggleMenu));
