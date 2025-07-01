document.addEventListener("DOMContentLoaded", () => {
	const yearElement = document.getElementById("year");
	if (yearElement) {
		yearElement.textContent = new Date().getFullYear();
	}

	const mobileMenuButton = document.getElementById("mobile-menu-button");
	const mobileMenu = document.getElementById("mobile-menu");

	if (mobileMenuButton && mobileMenu) {
		mobileMenuButton.addEventListener("click", () => {
			mobileMenu.classList.toggle("menu-open");
		});
	}

	document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {

			if (this.pathname === window.location.pathname && this.hash) {
				e.preventDefault();

				const targetId = this.getAttribute("href");
				if (targetId === "#") return;

				const targetElement = document.querySelector(this.hash);
				if (targetElement) {
					if (mobileMenu && mobileMenu.classList.contains("menu-open")) {
						mobileMenu.classList.remove("menu-open");
					}

					window.scrollTo({
						top: targetElement.offsetTop - 70,
						behavior: "smooth",
					});
				}
			}
		});
	});

	const sections = document.querySelectorAll("section[id]");

	function highlightNavLink() {
		const scrollPosition = window.scrollY + 100;

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.getAttribute("id");

			const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
			if (navLink) {
				if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
					navLink.classList.add("active");
				} else {
					navLink.classList.remove("active");
				}
			}
		});
	}

	window.addEventListener("scroll", highlightNavLink);
	highlightNavLink();

	const timelineItems = document.querySelectorAll(".timeline-item");

	function checkTimelineItems() {
		const windowHeight = window.innerHeight;
		timelineItems.forEach((item) => {
			const itemTop = item.getBoundingClientRect().top;

			if (itemTop < windowHeight * 0.8) {
				item.classList.add("animate");
			}
		});
	}

	window.addEventListener("scroll", checkTimelineItems);
	checkTimelineItems();
});
