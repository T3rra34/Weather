const ls = new LS();
const weatherLocation = ls.getLocationData();
const weather = new Weather(weatherLocation);
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);

const form = document.querySelector('form');
form.addEventListener('submit', changeCity);

function changeCity(event){
	const newWeather = form.firstElementChild.value;
	weather.changeCity(newWeather);
	ls.setLocationData(newWeather);
	getWeather();
	document.querySelector('#city-name').value = "";
	event.preventDefault();
}

function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
}