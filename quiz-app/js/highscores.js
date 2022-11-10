const highScoresList = document.querySelector(".highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - <span>${score.score}</span></li>`;
  })
  .join("");