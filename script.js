const quest = document.querySelectorAll(".accordion__item");

quest.forEach((q) => {
	q.addEventListener("click", () => {
		console.log("click clik");
		q.classList.toggle("active");
	});
});
