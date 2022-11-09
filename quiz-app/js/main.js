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
	getNewQuestion()
	loader.classList.add('hidden')
}

getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
		localStorage.setItem('mostRecentScore', score)
		//go to the end page
		return window.location.assign('/endpage.html')
	}
	questionCounter++
	progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`
	//Update the progress bar
	progressBar.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

	const questionIndex = Math.floor(Math.random() * availableQuestions.length)
	currentQuestion = availableQuestions[questionIndex]
	question.innerText = currentQuestion.question

	choices.forEach((choice) => {
		const number = choice.dataset['number']
		choice.innerText = currentQuestion['choice' + number]
	})

	availableQuestions.splice(questionIndex, 1)
	acceptingAnswers = true
}

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'wrong';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1500);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerHTML = `Score: ${score}`;
};