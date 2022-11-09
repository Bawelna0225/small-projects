const question = document.querySelector('#question'),
	choices = [...document.querySelectorAll('.answer .text')],
	progressText = document.querySelector('.question-number p'),
	scoreText = document.querySelector('.score'),
	progressBar = document.querySelector('.progress-bar')

let currentQuestion = {}
let score = 0
let questionNumber = 0
let availableQuestions = []
let questions = []

const fetchQuestions = async () => {
	try {
		const response = await fetch('../js/questions.json')
		const json = await response.json()
        console.log(json);
	} catch (error) {
		console.error('error', error)
	}
}
fetchQuestions()
