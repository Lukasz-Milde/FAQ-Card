const quest = document.querySelectorAll(".accordion__item");

quest.forEach((q) => {
	q.addEventListener("click", () => {
		q.classList.toggle("active");
	});
});
