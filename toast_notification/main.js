const buttons = document.querySelectorAll('.buttons button')
const closeButtons = document.querySelectorAll('.toast button span')
const notifications = document.querySelector('.notifications')

const createToast = (id) => {

}

buttons.forEach((button) => {
	button.addEventListener('click', (e) => createToast(e.target.id))
})
