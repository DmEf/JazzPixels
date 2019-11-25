let navMain = document.querySelector('.map-feed');
let eventsToggle = document.querySelector('.main-nav__fich-events');

eventsToggle.addEventListener('click', function() {
	event.preventDefault();
	if (eventsToggle.classList.contains('main-nav__fich-events--open')) {
		eventsToggle.classList.remove('main-nav__fich-events--open');
		eventsToggle.classList.add('main-nav__fich-events--close');
		navMain.classList.remove('map-feed--close');
		navMain.classList.add('map-feed--open');
	} else {
		eventsToggle.classList.remove('main-nav__fich-events--close');
		eventsToggle.classList.add('main-nav__fich-events--open');
		navMain.classList.remove('map-feed--open');
		navMain.classList.add('map-feed--close');
	}
});