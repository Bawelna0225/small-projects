var html = document.getElementsByTagName('html')
var radios = document.getElementsByName('theme')

if (localStorage.getItem('currentTheme') != null || !localStorage.getItem('currentTheme') != []) {
    html[0].classList.add(localStorage.getItem('currentTheme'))
	document.getElementById(localStorage.getItem('currentTheme')).checked = true
}

radios.forEach((radio) => {
	radio.addEventListener('click', () => {
		html[0].classList = ''
		html[0].classList.add(radio.id)
		localStorage.setItem('currentTheme', radio.id)
	})
})
