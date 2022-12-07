const createSnowFlake = () => {
	const snowflake = document.createElement("span");
	snowflake.classList.add("material-symbols-outlined");
	snowflake.textContent = "ac_unit";
	snowflake.classList.add(`snowflake`);

	document.body.appendChild(snowflake);
};

setInterval(createSnowFlake, 50);