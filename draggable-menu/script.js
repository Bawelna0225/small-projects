const nav = document.querySelector('.nav')
const toggleBtn = document.querySelector('.toggle')

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active')
  nav.classList.toggle('active')
})