const checkoutForm = document.querySelector('form.checkout')
const emailInput = document.getElementById('email')
const cardNumber = document.getElementById('card-number')
const expirationDate = document.getElementById('expiration-date')
const cvc = document.getElementById('cvc')
const nameOnCard = document.getElementById('name')
const zipCode = document.getElementById('zip')

cardNumber.addEventListener('input', formatInput(cardNumber))
expirationDate.addEventListener('input', formatInput(expirationDate))
cvc.addEventListener('input', formatInput(cvc))
zipCode.addEventListener('input', formatInput(zipCode))

function formatInput(element) {
	switch (element.id) {
		case 'card-number':
			var maskOptions = {
				// 0 - any number
				// a - any letter
				// * - any character
				mask: '0000 0000 0000 0000',
			}
			break
		case 'expiration-date':
			var maskOptions = {
				mask: '00/00',
			}
			break
		case 'cvc':
			var maskOptions = {
				mask: '0000',
			}
			break
		case 'zip':
			var maskOptions = {
				mask: '00-000',
			}
			break
	}

	IMask(element, maskOptions)
}

checkoutForm.addEventListener('submit', (e) => {
	e.preventDefault()
	validateForm()
})

function validateForm() {
	let errorFlag = false
	if (cardNumber.value.length < 1 || cardNumber.value.split(' ').join('') == '') {
		cardNumber.classList.add('error')
		errorFlag = true
	}
	if (expirationDate.value.length < 1 || expirationDate.value.split(' ').join('') == '') {
		expirationDate.classList.add('error')
		errorFlag = true
	}
	if (!validateEmail(emailInput.value)) {
		emailInput.classList.add('error')
		errorFlag = true
	}
	if (cvc.value.length < 1 || cvc.value.split(' ').join('') == '') {
		cvc.classList.add('error')
		errorFlag = true
	}
	if (nameOnCard.value.length < 1 || nameOnCard.value.split(' ').join('') == '') {
		nameOnCard.classList.add('error')
		errorFlag = true
	}
	if (zipCode.value.length < 1 || zipCode.value.split(' ').join('') == '') {
		zipCode.classList.add('error')
		errorFlag = true
	}

	cardNumber.addEventListener('input', () => {
		cardNumber.classList.remove('error')
		checkoutForm.querySelector('button').classList.remove('fail')
	})
	expirationDate.addEventListener('input', () => {
		expirationDate.classList.remove('error')
	})
	emailInput.addEventListener('input', () => {
		emailInput.classList.remove('error')
	})
	cvc.addEventListener('input', () => {
		cvc.classList.remove('error')
	})
	nameOnCard.addEventListener('input', () => {
		nameOnCard.classList.remove('error')
	})
	zipCode.addEventListener('input', () => {
		zipCode.classList.remove('error')
	})
	if (!errorFlag) {
		if (cardNumber.value !== '4234 4234 1222 0000') {
			checkoutForm.querySelector('button').classList.remove('fail')
			checkoutForm.querySelector('button').classList.add('processing')
			setTimeout(() => {
				checkoutForm.querySelector('button').classList.remove('processing')
				cardNumber.classList.add('error')
				checkoutForm.querySelector('button').classList.add('fail')
			}, 1500)
		} else {
			checkoutForm.querySelector('button').classList.add('processing')
			setTimeout(() => {
				checkoutForm.querySelector('button').classList.remove('processing')
				
				setTimeout(() => {
					checkoutForm.reset()
				}, 2500)
			}, 1500)
		}
	}
}


const validateEmail = (emailInput) => {
	let pattern = /\S+@\S+\.\S+/
	return pattern.test(emailInput)
}

const countries = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Anguilla',
	'Antigua & Barbuda',
	'Argentina',
	'Armenia',
	'Aruba',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bermuda',
	'Bhutan',
	'Bolivia',
	'Bosnia & Herzegovina',
	'Botswana',
	'Brazil',
	'British Virgin Islands',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cape Verde',
	'Cayman Islands',
	'Chad',
	'Chile',
	'China',
	'Colombia',
	'Congo',
	'Cook Islands',
	'Costa Rica',
	'Cote D Ivoire',
	'Croatia',
	'Cruise Ship',
	'Cuba',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Estonia',
	'Ethiopia',
	'Falkland Islands',
	'Faroe Islands',
	'Fiji',
	'Finland',
	'France',
	'French Polynesia',
	'French West Indies',
	'Gabon',
	'Gambia',
	'Georgia',
	'Germany',
	'Ghana',
	'Gibraltar',
	'Greece',
	'Greenland',
	'Grenada',
	'Guam',
	'Guatemala',
	'Guernsey',
	'Guinea',
	'Guinea Bissau',
	'Guyana',
	'Haiti',
	'Honduras',
	'Hong Kong',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Isle of Man',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jersey',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kuwait',
	'Kyrgyz Republic',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macau',
	'Macedonia',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Montenegro',
	'Montserrat',
	'Morocco',
	'Mozambique',
	'Namibia',
	'Nepal',
	'Netherlands',
	'Netherlands Antilles',
	'New Caledonia',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'Norway',
	'Oman',
	'Pakistan',
	'Palestine',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Puerto Rico',
	'Qatar',
	'Reunion',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Pierre & Miquelon',
	'Samoa',
	'San Marino',
	'Satellite',
	'Saudi Arabia',
	'Senegal',
	'Serbia',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'South Africa',
	'South Korea',
	'Spain',
	'Sri Lanka',
	'St Kitts & Nevis',
	'St Lucia',
	'St Vincent',
	'St. Lucia',
	'Sudan',
	'Suriname',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syria',
	'Taiwan',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	"Timor L'Este",
	'Togo',
	'Tonga',
	'Trinidad & Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Turks & Caicos',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States',
	'United States Minor Outlying Islands',
	'Uruguay',
	'Uzbekistan',
	'Venezuela',
	'Vietnam',
	'Virgin Islands (US)',
	'Yemen',
	'Zambia',
	'Zimbabwe',
]

countries.forEach((country) => {
	const option = document.createElement('option')
	option.value = country
	option.textContent = country

	document.querySelector('#country').appendChild(option)
	if (country === 'Poland') {
		// option selected by default
		option.selected = true
	}
})

const copyCorrectBtn = document.querySelector('.correct-number button')

copyCorrectBtn.addEventListener('click', (e) => {
  let copyCorrectNumber = document.querySelector('.correct-number input')
  copyCorrectNumber.select();
  copyCorrectNumber.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyCorrectNumber.value);
})