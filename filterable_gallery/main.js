const filteringItems = [...document.querySelectorAll('.item')]
const galleryImages = [...document.querySelectorAll('.image')]

for (const item of filteringItems) {
    item.addEventListener('click', () => {
        document.querySelector('.item.active').classList.remove('active')
        item.classList.add('active')
        let currentFilter = item.getAttribute('data-filter-name')
        galleryImages.forEach(image => {
            let imageCategory = image.getAttribute('data-filter-name')
            if(imageCategory === currentFilter || currentFilter == 'all') {
                image.classList.remove('hide')
                image.classList.add('show')
            } else {
                image.classList.remove('show')
                image.classList.add('hide')
            }
        })
    })
}