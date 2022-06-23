const numberInput = document.querySelector('#number'),
    backgroundText = document.querySelector('.bg-text')

numberInput.addEventListener('input', (e) => {
    if(e.target.value % 2 === 0){
        backgroundText.textContent = 'even'
        document.body.style.backgroundColor = 'rgb(12, 58, 64)'
    }
    else{
        backgroundText.textContent = 'odd'
        document.body.style.backgroundColor = 'rgb(64, 12, 57)'

    }
})