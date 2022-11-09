const question = document.querySelector('#question'),
	choices = [...document.querySelectorAll('.answer .text')],
	progressText = document.querySelector('.question-number p'),
	scoreText = document.querySelector('.score'),
	progressBar = document.querySelector('.progress-bar')

let currentQuestion = {}
let score = 0
let acceptingAnswers = false;
let questionNumber = 0
let availableQuestions = []
let questions = []

fetch('../js/questions.json')
	.then((res) => {
		return res.json()
	})
	.then((loadedQuestions) => {
        console.log(loadedQuestions);
		questions = loadedQuestions.map((loadedQuestion) => {
			const formattedQuestion = {
				question: loadedQuestion.question,
			}

			const answerChoices = [...loadedQuestion.incorrect_answers]
			formattedQuestion.answer = Math.floor(Math.random() * 4) + 1
			answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer)

			answerChoices.forEach((choice, index) => {
				formattedQuestion['choice' + (index + 1)] = choice
			})

			return formattedQuestion
		})

		startGame()
	})
	.catch((err) => {
		console.error(err)
	})

const CORRECT_BONUS = 10
const MAX_QUESTIONS = 5

startGame = () => {
	questionCounter = 0
	score = 0
	availableQuestions = [...questions]
	loader.classList.add('hidden')
}