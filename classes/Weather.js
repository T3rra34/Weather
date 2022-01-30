class Weather {
	constructor(city) {
		this.key = '9e2145bbf1391d096fb2e91365d0313c';
		this.city = city;
	}

	async getWeather() {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
		const responseData = await response.json();
		return responseData;
	}

	changeCity(city){
		this.city = city;
	}
}