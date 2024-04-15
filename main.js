const nav = document.querySelector('nav');
const menuIcon = document.querySelector('#menu-icon');
const bgMenu = document.querySelector('.bg-menu');
const navLinks = document.querySelectorAll('nav a');
const navBtns = document.querySelectorAll('nav button');

const starsListBtns = document.querySelectorAll('#stars ul li');
const rewardsSections = document.querySelectorAll('.rewards-section div');

const footerLists = document.querySelectorAll('.footer-lists > ul > li');
const footerListLinks = document.querySelectorAll('.footer-lists > ul > ul');

let menuOpened = false;
const isOpened = menuOpened => {
	if (menuOpened) {
		bgMenu.classList.remove('hide');
		nav.classList.remove('hide');
		menuIcon.setAttribute('name', 'close');
	} else {
		bgMenu.classList.add('hide');
		nav.classList.add('hide');
		menuIcon.setAttribute('name', 'menu');
	}
};

function toggleMenu() {
	menuOpened = !menuOpened;
	isOpened(menuOpened);
}

function closeMenu() {
	menuOpened = false;
	isOpened(menuOpened);
}

function windowWidth768() {
	if (window.innerWidth >= 768) {
		closeMenu();
		document.querySelector('.container-home a:nth-child(4)').style.display =
			'none';
		document.querySelector('.container-home p:last-child').style.display =
			'block';
		document.querySelector('.container-home button').textContent = 'Join now';
	} else {
		document.querySelector('.container-home a:nth-child(4)').style.display =
			'block';
		document.querySelector('.container-home p:last-child').style.display =
			'none';
		document.querySelector('.container-home button').textContent =
			'Join in the app';
	}
}

function windowWidth1200() {
	if (window.innerWidth >= 1200) {
		footerListLinks.forEach(list => list.classList.remove('hide'));
	} else {
		footerListLinks.forEach(list => list.classList.add('hide'));
		document
			.querySelectorAll('.footer-lists ion-icon')
			.forEach(icon => icon.classList.remove('opened'));
	}
}

menuIcon.addEventListener('click', toggleMenu);
bgMenu.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));
navBtns.forEach(btn => btn.addEventListener('click', closeMenu));
window.addEventListener('resize', () => {
	windowWidth768();
	windowWidth1200();
});
starsListBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		starsListBtns.forEach(btn => btn.classList.remove('current'));
		btn.classList.add('current');
		rewardsSections.forEach(sec => {
			sec.classList.remove('current');
			if (sec.id.includes(btn.textContent)) {
				sec.classList.add('current');
			}
		});
	});
});
footerLists.forEach(list => {
	list.addEventListener('click', () => {
		if (window.innerWidth < 1200) {
			list.nextElementSibling.classList.toggle('hide');
			list.querySelector('ion-icon').classList.toggle('opened');
		}
	});
});

windowWidth768();
windowWidth1200();
