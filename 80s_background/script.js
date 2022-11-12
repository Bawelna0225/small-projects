let starsQuantity = 35;

const createStars = (amount) => {
	for (let i = 0; i < amount; i++) {
		newDiv = document.createElement("div");
		newDiv.classList.add("star");
		newDiv.classList.add(`star-${[i]}`);
		document.body.appendChild(newDiv);
	}

	const stars = [...document.getElementsByClassName("star")],
		winWidth = window.innerWidth,
		winHeight = window.innerHeight;

	stars.forEach((div) => {
		randomTop = getRandomNumber(0, winHeight / 2);
		randomLeft = getRandomNumber(0, winWidth);
		divHeight = getRandomNumber(1, 5); // size of stars

		div.style.top = randomTop + "px";
		div.style.left = randomLeft + "px";
		div.style.height = divHeight + "px";
		div.style.backgroundColor = "white";
	});
};

const getRandomNumber = (min, max) => {
	return Math.random() * (max - min) + min;
};

createStars(starsQuantity);
