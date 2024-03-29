const list_items = [
	'Item 1',
	'Item 2',
	'Item 3',
	'Item 4',
	'Item 5',
	'Item 6',
	'Item 7',
	'Item 8',
	'Item 9',
	'Item 10',
	'Item 11',
	'Item 12',
	'Item 13',
	'Item 14',
	'Item 15',
	'Item 16',
	'Item 17',
	'Item 18',
	'Item 19',
	'Item 20',
	'Item 21',
	'Item 22',
]

const list_element = document.querySelector('.list')
const pagination = document.querySelector('.pagination-numbers')
const firstPageButton = document.querySelector('.first-page')
const lastPageButton = document.querySelector('.last-page')
const prevPageButton = document.querySelector('.prev-page')
const nextPageButton = document.querySelector('.next-page')

let current_page = 1
let rows = 5
let page_count = Math.ceil(list_items.length / rows)

function checkIfFirstPage() {
	if (current_page === 1) {
		firstPageButton.disabled = true
		prevPageButton.disabled = true
	} else {
		firstPageButton.disabled = false
		prevPageButton.disabled = false
	}
}
function checkIfLastPage() {
	if (current_page === page_count) {
		lastPageButton.disabled = true
		nextPageButton.disabled = true
	} else {
		lastPageButton.disabled = false
		nextPageButton.disabled = false
	}
}
checkIfFirstPage()
checkIfLastPage()

firstPageButton.onclick = () => {
	DisplayList(list_items, list_element, rows, 1)
	current_page = 1
	document.querySelector('button.active').classList.remove('active')
	document.querySelectorAll('.pagination-numbers button')[0].classList.add('active')
	checkIfFirstPage()
	checkIfLastPage()
}

lastPageButton.onclick = () => {
	DisplayList(list_items, list_element, rows, page_count)
	current_page = page_count
	document.querySelector('button.active').classList.remove('active')
	document.querySelector('.pagination-numbers').lastElementChild.classList.add('active')
	checkIfFirstPage()
	checkIfLastPage()
}

prevPageButton.onclick = () => {
	if (current_page === 1) return
	DisplayList(list_items, list_element, rows, --current_page)
	let prevActive = document.querySelector('button.active').previousElementSibling
	document.querySelector('button.active').classList.remove('active')
	prevActive.classList.add('active')
	checkIfFirstPage()
	checkIfLastPage()
}

nextPageButton.onclick = () => {
	if (current_page === page_count) return
	DisplayList(list_items, list_element, rows, ++current_page)
	let nextActive = document.querySelector('button.active').nextElementSibling
	document.querySelector('button.active').classList.remove('active')
	nextActive.classList.add('active')
	checkIfFirstPage()
	checkIfLastPage()
}

function DisplayList(items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = ''
	page--

	let start = rows_per_page * page
	let end = start + rows_per_page
	let paginatedItems = items.slice(start, end)

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i]

		let item_element = document.createElement('div')
		item_element.classList.add('item')
		item_element.innerText = item

		wrapper.appendChild(item_element)
	}
}

function SetupPagination(items, wrapper, rows_per_page) {
	wrapper.innerHTML = ''

	let page_count = Math.ceil(items.length / rows_per_page)
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items)
		wrapper.appendChild(btn)
	}
}

function PaginationButton(page, items) {
	let button = document.createElement('button')
	button.innerText = page

	if (current_page == page) button.classList.add('active')

	button.addEventListener('click', function () {
		current_page = page
		DisplayList(items, list_element, rows, current_page)

		let current_btn = document.querySelector('button.active')
		current_btn.classList.remove('active')

		button.classList.add('active')
		checkIfFirstPage()
		checkIfLastPage()
	})

	return button
}

DisplayList(list_items, list_element, rows, current_page)
SetupPagination(list_items, pagination, rows)
