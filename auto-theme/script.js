let html = document.getElementsByTagName('html')
let radios = document.getElementsByName('theme')
let autoSettings = document.getElementsByName('auto-setting')





radios.forEach((radio) => {
	radio.addEventListener('click', () => {
		html[0].classList = ''
		html[0].classList.add(radio.id)
		localStorage.setItem('currentTheme', radio.id)
	})
})

if (localStorage.getItem('currentTheme') == null || localStorage.getItem('currentTheme') == []) {
	html[0].classList.add('auto')
	localStorage.setItem('currentTheme', 'auto')
} else {
	html[0].classList.add(localStorage.getItem('currentTheme'))
	document.getElementById(localStorage.getItem('currentTheme')).checked = true

}
