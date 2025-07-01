document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("year").textContent = new Date().getFullYear()

	const menuToggle = document.querySelector(".mobile-menu-toggle")
	const nav = document.querySelector("nav")

	if (menuToggle) {
		menuToggle.addEventListener("click", () => {
			nav.classList.toggle("active")
			menuToggle.classList.toggle("active")
		})
	}

	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault()

			const targetId = this.getAttribute("href")
			if (targetId === "#") return

			const targetElement = document.querySelector(targetId)
			if (targetElement) {
				if (nav.classList.contains("active")) {
					nav.classList.remove("active")
					menuToggle.classList.remove("active")
				}

				window.scrollTo({
					top: targetElement.offsetTop - 70,
					behavior: "smooth",
				})
			}
		})
	})

	const sections = document.querySelectorAll("section[id]")

	function highlightNavLink() {
		const scrollPosition = window.scrollY + 100 

		sections.forEach((section) => {
			const sectionTop = section.offsetTop
			const sectionHeight = section.offsetHeight
			const sectionId = section.getAttribute("id")

			if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
				document.querySelector(`nav a[href="#${sectionId}"]`)?.classList.add("active")
			} else {
				document.querySelector(`nav a[href="#${sectionId}"]`)?.classList.remove("active")
			}
		})
	}

	window.addEventListener("scroll", highlightNavLink)

	highlightNavLink()

	const timelineItems = document.querySelectorAll(".timeline-item")

	function checkTimelineItems() {
		timelineItems.forEach((item) => {
			const itemTop = item.getBoundingClientRect().top
			const windowHeight = window.innerHeight

			if (itemTop < windowHeight * 0.8) {
				item.classList.add("animate")
			}
		})
	}

	window.addEventListener("scroll", checkTimelineItems)

	checkTimelineItems()
})
