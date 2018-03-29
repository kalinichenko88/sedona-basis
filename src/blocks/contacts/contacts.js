function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: {lat: 55.74818, lng: 37.53842},
		mapTypeControl: false,
		gestureHandling: 'cooperative' 
	});

	var marker = new google.maps.Marker({
		position: {lat: 55.74818, lng: 37.53842},
		map: map
	});
}