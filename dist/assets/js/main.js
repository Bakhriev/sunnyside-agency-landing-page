function burgerMenu() {
	const burger = document.querySelector(".burger")
	const menu = document.querySelector(".menu")
	const body = document.querySelector("body")

	burger.addEventListener("click", () => {
		menu.classList.toggle("active")
		burger.classList.toggle("active")
		body.classList.toggle("locked")
	})
	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove("active")
			burger.classList.remove("active")
			body.classList.remove("locked")
		}
	})
}
burgerMenu()