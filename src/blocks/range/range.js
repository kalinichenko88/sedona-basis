// Range
//------------------------------------------------------------------------------

(function($) {
	$('.range').each(function() {
		var range = $(this);
		var rangeFromInput = range.attr('data-from-input-name');
		var rangeToInput = range.attr('data-to-input-name');

		range.ionRangeSlider({
			onStart: function(data) {
				$('[name="' + rangeFromInput + '"]').val(data.from);
				$('[name="' + rangeToInput + '"]').val(data.to);
			},
			onChange: function(data) {
				$('[name="' + rangeFromInput + '"]').val(data.from);
				$('[name="' + rangeToInput + '"]').val(data.to);
			}
		});
	});
}(jQuery));
