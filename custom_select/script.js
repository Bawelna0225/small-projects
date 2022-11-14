const selectMenu = document.querySelector('.select')
const options = document.querySelectorAll('.option')

const setOption = (option) => {
	document.querySelector('.select input').value = option
}

selectMenu.addEventListener('click', () => {
	selectMenu.classList.toggle('open')
})

options.forEach((option) => {
	option.addEventListener('click', () => {
		setOption(option.textContent)
	})
})
