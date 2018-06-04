// File
//------------------------------------------------------------------------------

if (document.querySelector('.file') !== null) {
	let element = document.querySelectorAll('.file');

	Array.prototype.forEach.call(element, function(el) {
		let labelFor = el.getAttribute('id');

		el.insertAdjacentHTML('afterend', '<div class=""><label for="' + labelFor + '">Выбрать…</label></div>');
	});
}
