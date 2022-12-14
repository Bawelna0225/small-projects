const checkoutForm = document.querySelector('form.checkout')
const emailInput = document.getElementById('email')
const cardNumber = document.getElementById('card-number')
const expirationDate = document.getElementById('expiration-date')
const cvc = document.getElementById('cvc')
const nameOnCard = document.getElementById('name')
const zipCode = document.getElementById('zip')

checkoutForm.addEventListener('submit', (e) => {
	e.preventDefault()
	validateForm()
})

function validateForm() {}
