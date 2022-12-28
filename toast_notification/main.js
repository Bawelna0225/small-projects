const buttons = document.querySelectorAll('.buttons button')
const closeButtons = document.querySelectorAll('.toast button span')
const notifications = document.querySelector('.notifications')

const toastDetails = {
	success: {
		icon: 'check_circle',
		text: 'Success: success toast',
	},
	warning: {
		icon: 'warning',
		text: 'Warning: warning toast',
	},
	error: {
		icon: 'error',
		text: 'Error: error toast',
	},
	info: {
		icon: 'info',
		text: 'Info: info toast',
	},
}


const createToast = (id) => {

}

buttons.forEach((button) => {
	button.addEventListener('click', (e) => createToast(e.target.id))
})
