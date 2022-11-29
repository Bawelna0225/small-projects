var html = document.getElementsByTagName('html');
var radios = document.getElementsByName('theme'); 

radios.forEach((radio) => {
    radio.addEventListener('click', () => {
        html[0].classList = ''
        html[0].classList.add(radio.id)
    })
})