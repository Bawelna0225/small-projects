const form = document.querySelector('form')
const qrcode = document.querySelector('#qrcode')

const onFormSubmit = (e) => {
	e.preventDefault()

	clearUI()

	const url = document.querySelector('input').value
	const size = document.querySelector('select').value

	if (url === '') return
	showSpinner()

	setTimeout(() => {
		hideSpinner()
		generateQR(url, size)
		setTimeout(() => {
			const saveURL = qrcode.querySelector('img').src
			createSaveBtn(saveURL)
		}, 50)
	}, 1500)
}
const generateQR = (url, size) => {
	const qrcode = new QRCode('qrcode', {
		text: url,
		width: size,
		height: size,
	})
}

const showSpinner = () => {
	document.getElementById('spinner').style.display = 'block'
}
const hideSpinner = () => {
	document.getElementById('spinner').style.display = 'none'
}
const clearUI = () => {
	qrcode.innerHTML = ''
    const saveLink = document.getElementById('save-link')
    if (saveLink) saveLink.remove()
}
const createSaveBtn = (saveURL) => {
	const link = document.createElement('a')
	link.id = 'save-link'
	link.href = saveURL
	link.download = 'qrcode'
	link.innerHTML = 'Save Image'
	document.getElementById('generated').appendChild(link)
}

form.addEventListener('submit', onFormSubmit)
