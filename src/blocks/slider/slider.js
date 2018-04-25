// Slider
//------------------------------------------------------------------------------

if (document.querySelector('.slider') !== null) {
	let element = document.querySelectorAll('.slider');

	Array.prototype.forEach.call(element, function(el) {
		let pagination = el.querySelector('.slider__pagination');

		let slider = new Swiper(el, {
			watchOverflow: true,
			pagination: {
				el: pagination,
				type: 'bullets',
				dynamicBullets: true,
				dynamicMainBullets: 3,
				clickable: true,
				modifierClass: 'slider__pagination--',
				bulletClass: 'slider__bullet',
				bulletActiveClass: 'slider__bullet--active'
			},
		});
	});
}
