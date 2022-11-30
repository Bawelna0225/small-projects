let html = document.getElementsByTagName('html')
let radios = document.getElementsByName('theme')
let autoSettings = document.getElementsByName('auto-setting')

function checkAutoTheme() {
	if (html[0].classList.contains('auto')) {
		document.querySelector('.auto-theme-settings').style.display = 'block'

	} else {
		document.querySelector('.auto-theme-settings').style.display = 'none'
	}
}



radios.forEach((radio) => {
	radio.addEventListener('click', () => {
		html[0].classList = ''
		html[0].classList.add(radio.id)
		localStorage.setItem('currentTheme', radio.id)
		checkAutoTheme()
	})
})

if (localStorage.getItem('currentTheme') == null || localStorage.getItem('currentTheme') == []) {
	html[0].classList.add('auto')
	localStorage.setItem('currentTheme', 'auto')
	checkAutoTheme()
} else {
	html[0].classList.add(localStorage.getItem('currentTheme'))
	document.getElementById(localStorage.getItem('currentTheme')).checked = true

	checkAutoTheme()
}
