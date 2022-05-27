const progressBar = document.querySelector('.progress-bar'),
	progressNum = document.querySelector('.progress-num')

const updateProgressBar = () => {
	progressNum.innerText = `${Math.floor(getScrollPercentage())}%`
	progressNum.style.color = `hsl(${Math.floor(getScrollPercentage()) * 2}, 100%, 50%)`

	progressBar.style.backgroundColor = `hsl(${Math.floor(getScrollPercentage()) * 2}, 100%, 50%)`
	progressBar.style.width = `${getScrollPercentage()}%`
    
	requestAnimationFrame(updateProgressBar)
}

const getScrollPercentage = () => {
	return (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
}

updateProgressBar()
