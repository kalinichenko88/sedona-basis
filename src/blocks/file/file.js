// File
//------------------------------------------------------------------------------

if (document.querySelector('.file') !== null) {
	let element = document.querySelectorAll('.file');

	Array.prototype.forEach.call(element, function(el) {
		let id = el.getAttribute('id');

		let layout = '' +
			'<label class="file" for="' + id + '">' +
				'<ul class="file__field"></ul>' +
				'<div class="file__button"></div>' +
			'</label>';

		el.insertAdjacentHTML('afterend', layout);

		el.addEventListener('change', function() {
			handleFiles(this, id);
		});
	});

	function handleFiles(is, id) {
		let filesSelected = is.files;
		let filesList = '';

		for (let i = 0; i < filesSelected.length; i++) {
			let fileName = filesSelected[i].name;

			filesList = filesList + '<li>' + fileName + '</li>';
		}

		document.querySelector('.file[for="' + id + '"] .file__field').innerHTML = filesList;
	}
}
