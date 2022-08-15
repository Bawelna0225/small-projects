const activatePreloaderBtns = document.querySelectorAll('button')

activatePreloaderBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		let btnAttr = btn.getAttribute('data-preloader-num')
		document.querySelector(`.preloader-${btnAttr}`).classList.add('active')
		setTimeout(() => {
			document.querySelector(`.preloader-${btnAttr}`).classList.remove('active')
		}, 2000)
	})
})
