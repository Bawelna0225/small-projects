const createSnowFlake = () => {
	const snowflake = document.createElement("span");
	snowflake.classList.add("material-symbols-outlined");
	snowflake.textContent = "ac_unit";
	snowflake.classList.add(`snowflake`);

	document.body.appendChild(snowflake);
	setTimeout(() => {
		// remove snowflake after 5s
		snowflake.remove();
	}, 5000);
};

setInterval(createSnowFlake, 50);