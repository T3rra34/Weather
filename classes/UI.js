class UI {
	constructor() {
		this.description = document.querySelector("#description");
		this.temp = document.querySelector("#temp");
		this.city = document.querySelector("#location");
		this.wind = document.querySelector('#wind-speed');
		this.humidity = document.querySelector('#humidity');
	}
	drawWeather(data) {
		let celcius = Math.round(parseFloat(data.main.temp)-273.15);
		let description = data.Weather[0].description;
		console.log(data);

		this.description.innerHTML = description;
		this.temp.innerHTML = celcius + '&deg;';
		this.city.innerHTML = data.name;
		this.wind.innerHTML = "Wind " + data.wind.speed + " m/s";
		this.humidity.innerHTML = data.main.humidity + "%";
	}
}