const accordion = document.querySelector(".accordion");
const accordionBtns = document.querySelectorAll(".accordion-btn");
const icons = document.querySelectorAll(".fa-chevron-down");

const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".burger-icon");
const allNavItems = document.querySelectorAll(".nav-item-mobile");
const logo = document.querySelector(".logo");

const handleNav = () => {
	navMobile.classList.toggle("nav-mobile--active");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
		});
	});
	logo.addEventListener("click", () => {
		navMobile.classList.remove("nav-mobile--active");
	});
};

navBtn.addEventListener("click", handleNav);

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains("active")) {
		this.nextElementSibling.classList.remove("active");
		this.firstElementChild.classList.remove("bounce");
	} else {
		closeAccordionItems();
		this.nextElementSibling.classList.toggle("active");
		this.firstElementChild.classList.add("bounce");
	}
}

function closeAccordionItems() {
	const allActiveItems = document.querySelectorAll(".accordion-content");
	allActiveItems.forEach((item) => item.classList.remove("active"));
}

function closeAccordionIcons() {
	const allActiveIcons = document.querySelectorAll(".bounce");
	allActiveIcons.forEach((item) => item.classList.remove("bounce"));
}

const clickOutsideAccordion = (e) => {
	if (
		e.target.classList.contains("accordion-btn") ||
		e.target.classList.contains("accordion-content") ||
		e.target.classList.contains("accordion-content-text")
	)
		return;
	closeAccordionItems();
	closeAccordionIcons();
};

accordionBtns.forEach((btn) =>
	btn.addEventListener("click", openAccordionItems)
);

window.addEventListener("click", clickOutsideAccordion);
