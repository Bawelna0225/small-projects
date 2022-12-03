const filteringItems = [...document.querySelectorAll('.item')]
const galleryImages = [...document.querySelectorAll('.image')]

for (const item of filteringItems) {
    item.addEventListener('click', () => {
        document.querySelector('.item.active').classList.remove('active')
        item.classList.add('active')
        let currentFilter = item.getAttribute('data-filter-name')
        console.log(currentFilter);
  
    })
}