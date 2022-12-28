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
	const { icon, text } = toastDetails[id]
	const toast = document.createElement('li')
	toast.className = `toast ${id}`
	toast.innerHTML = `				
                <div class="column">
					<span class="material-symbols-outlined"> ${icon} </span>
					<span>${text}</span>
				</div>
				<button>
					<span class="material-symbols-outlined"> close </span>
				</button>`

	notifications.appendChild(toast)
}

buttons.forEach((button) => {
	button.addEventListener('click', (e) => createToast(e.target.id))
})
