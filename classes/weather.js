class weather {
	constructor() {
		this.key = '5cc2e697de6224a254700ae41a4e95d1';
		this.city = city;
	}
	async getWeather() {
		const responce = await (`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responceData = await responce.json()
		return responceData;
	}
	changeCity(city) {
		this.city = city;
	}
}