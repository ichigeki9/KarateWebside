// Mobile nav menu
const dropdownOne = document.querySelector(".dropdown-container-one");
const dropdownTwo = document.querySelector(".dropdown-container-two");
const dropBtnOne = document.querySelector(".dropBtn-one");
const dropBtnTwo = document.querySelector(".dropBtn-two");

// Accordion

const accordion = document.querySelector(".accordion");
const accordionBtns = document.querySelectorAll(".accordion-btn");

// MOBILE NAV
const hamburgerNav = document.querySelector(".hamburger-nav");
const navBtn = document.querySelector(".hamburger");


// FOOTER YEAR STRONA GRID

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	hamburgerNav.classList.toggle("nav-mobile--active");
};


const added = () => {
	dropdownOne.classList.toggle("visible");
};
const addedd = () => {
	dropdownTwo.classList.toggle("visible");
};

// accordion menu Function
function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active')
	} else {
		closeAccordionItems();
		this.nextElementSibling.classList.toggle("active");
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll(".accordion-info");
	allActiveItems.forEach((items) => items.classList.remove("active"));
};

const clickOutsideAccordion = (e) => {
	if(e.target.classList.contains('accordion-btn') || e.target.classList.contains('accordion-info') || e.target.classList.contains('accordion-info-text') )
	return
	closeAccordionItems()
	
}

navBtn.addEventListener("click", handleNav);

accordionBtns.forEach((btn) =>
btn.addEventListener("click", openAccordionItems)
);

dropBtnOne.addEventListener("click", added);
dropBtnTwo.addEventListener("click", addedd);

window.addEventListener('click', clickOutsideAccordion)
