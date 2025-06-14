document.addEventListener("DOMContentLoaded", () => {
	// Update copyright year
	document.getElementById("year").textContent = new Date().getFullYear()

	// Mobile menu toggle
	const menuToggle = document.querySelector(".mobile-menu-toggle")
	const nav = document.querySelector("nav")

	if (menuToggle) {
		menuToggle.addEventListener("click", () => {
			nav.classList.toggle("active")
			menuToggle.classList.toggle("active")
		})
	}

	// Smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault()

			const targetId = this.getAttribute("href")
			if (targetId === "#") return

			const targetElement = document.querySelector(targetId)
			if (targetElement) {
				// Close mobile menu if open
				if (nav.classList.contains("active")) {
					nav.classList.remove("active")
					menuToggle.classList.remove("active")
				}

				// Scroll to target
				window.scrollTo({
					top: targetElement.offsetTop - 70, // Account for fixed header
					behavior: "smooth",
				})
			}
		})
	})

	// Form submission handling
	const contactForm = document.getElementById("contactForm")
	if (contactForm) {
		contactForm.addEventListener("submit", (e) => {
			e.preventDefault()

			// Get form data
			const name = document.getElementById("name").value
			const email = document.getElementById("email").value
			const subject = document.getElementById("subject").value
			const message = document.getElementById("message").value

			// In a real application, you would send this data to a server
			// For this demo, we'll just log it and show a success message
			console.log("Form submitted:", { name, email, subject, message })

			// Show success message
			alert("Thank you for your message! In a real application, this would be sent to a server.")

			// Reset form
			contactForm.reset()
		})
	}

	// Add active class to nav links based on scroll position
	const sections = document.querySelectorAll("section[id]")

	function highlightNavLink() {
		const scrollPosition = window.scrollY + 100 // Add offset for header

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

	// Initialize highlight on page load
	highlightNavLink()

	// Add animation to timeline items
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

	// Check on initial load
	checkTimelineItems()
})
