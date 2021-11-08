function weatherDataFetch(city) {
	var key = '9e2145bbf1391d096fb2e91365d0313c';
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp) {
		return resp.json()
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function() {
	});
}

function cityWeather(e) {
	weatherDataFetch('Tallinn');
}