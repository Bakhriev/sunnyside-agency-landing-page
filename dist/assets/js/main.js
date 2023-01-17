function burgerMenu() {
	const burger = document.querySelector(".burger")
	const menu = document.querySelector(".menu")

	burger.addEventListener("click", () => {
		menu.classList.toggle("active")
		burger.classList.toggle("active")
	})
	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove("active")
			burger.classList.remove("active")
		}
	})
}
burgerMenu()