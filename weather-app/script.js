const cityInput = document.querySelector('#city-input'),
	welcomeText = document.querySelector('.welcome'),
	tempBox = document.querySelector('.temp'),
	weatherDesc = document.querySelector('.weather'),
	cityBox = document.querySelector('.city'),
	dateBox = document.querySelector('.date'),
	countryBox = document.querySelector('.country'),
	snackBar = document.querySelector('.snackbar'),
	feelsLike = document.querySelector('.feels-like span'),
	humidityBox = document.querySelector('.humidity span')

let api

cityInput.addEventListener('keyup', (e) => {
	if (e.key == 'Enter' && cityInput != '') {
		requestApi(cityInput.value)
	}
})

const requestApi = (city) => {
	api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=api_key`
	fetchData()
}

const fetchData = () => {
	fetch(api)
		.then((res) => res.json())
		.then((result) => weatherDetails(result))
		.catch(() => {
			console.log('error')
		})
}

const weatherDetails = (result) => {
	if (result.cod == '404') {
		snackBar.classList.add('active')
		snackBar.classList.add('error')

		snackBar.innerText = `${cityInput.value} isn't a valid city name`
		setTimeout(() => {
			snackBar.classList.remove('error')
			snackBar.classList.remove('active')
		}, 2000)
	} else {
		const city = result.name,
			country = result.sys.country
		const { description, id } = result.weather[0]
		const { temp, feels_like, humidity } = result.main

		tempBox.innerHTML = `${Math.floor(temp)}ºC`
		weatherDesc.innerHTML = `${description}`
		cityBox.innerHTML = city
		countryBox.innerHTML = country
		feelsLike.innerHTML = `${Math.floor(feels_like)}ºC`
		humidityBox.innerHTML = humidity
	}
}

window.addEventListener('load', () => {
	dateBuilder()
})

function dateBuilder() {
	let now = new Date()
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

	let day = days[now.getDay()]
	let date = now.getDate()
	let month = months[now.getMonth()]
	let year = now.getFullYear()

	if (now.getHours() < 12 && now.getHours() >= 5) {
		welcomeText.innerText = 'Good Morning'
		document.body.classList.add('morning')
	} else if (now.getHours() >= 12 && now.getHours() < 17) {
		welcomeText.innerText = 'Good Afternoon'
		document.body.classList.add('afternoon')
	} else {
		welcomeText.innerText = 'Good Evening'
		document.body.classList.add('evening')
	} 

	dateBox.innerText = `${day} ${date} ${month} ${year}`
}
