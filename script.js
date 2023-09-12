// Mobile nav menu
// document.addEventListener('DOMContentLoaded', function(){



const dropdownOne = document.querySelector(".dropdown-container-one");
const dropdownTwo = document.querySelector(".dropdown-container-two");
const dropBtnOne = document.querySelector(".dropBtn-one");
const dropBtnTwo = document.querySelector(".dropBtn-two");
// const btn = document.querySelector('.oranges');

// Accordion

const accordion = document.querySelector(".accordion");
const accordionBtns = document.querySelectorAll(".accordion-btn");
const accordionPagon = document.querySelectorAll(".pagon");


// MOBILE NAV
const hamburgerNav = document.querySelector(".hamburger-nav");
const navBtn = document.querySelector(".hamburger");




const setVisibleNav = () => {
	hamburgerNav.classList.add("active");
}
const setUnvisibleNav = () => {
	hamburgerNav.classList.remove("active");
}
// FOOTER YEAR STRONA GRID

const openNav = () => {
	setVisibleNav()
	setTimeout(() => {
		navBtn.classList.add("is-active");
		hamburgerNav.classList.add("nav-mobile--active");
	}, 50);
};

const closeNav = () => {
	navBtn.classList.remove("is-active");
	hamburgerNav.classList.remove("nav-mobile--active");
	setTimeout(() => {
		setUnvisibleNav()
	}, 200);
};



const added = () => {
	dropdownOne.classList.toggle("visible");
};
const addedd = () => {
	dropdownTwo.classList.toggle("visible");
};


// SPRAWDZANIE NA CO KLUKNALES
// document.addEventListener('click', (e) => {
// 	console.log(e.target.parentElement.nextElementSibling);
	
// });



// accordion menu Function
function openAccordionItems() {
	
	if (this.nextElementSibling.classList.contains("active")) {
		this.nextElementSibling.classList.remove("active");
	} else {
		closeAccordionItem();
		this.nextElementSibling.classList.toggle("active");
		
	}
}

const closeAccordionItem = () => {
	const allActiveItems = document.querySelectorAll(".accordion-info");
	allActiveItems.forEach((item) => item.classList.remove("active"))
}

const clickOutsideAccordion = e => {
	if (
		e.target.classList.contains("accordion-btn") ||
		e.target.classList.contains("accordion-info") ||
		e.target.classList.contains("accordion-info-text")
		)
		return
		closeAccordionItem()
	}
	// console.log(btn.nextElementSibling);
	// const addToBtn = () => {
		// 	btn.nextElementSibling.classList.toggle('active');
		// }
		// btn.addEventListener('click', addToBtn );
		
		


		
		// buttonMeetUs.addEventListener('click', scrollMeetUs);
		// buttonAboutUs.addEventListener('click', scrollMeetUs);
		// buttonNews.addEventListener('click', scrollNews);
		
		accordionBtns.forEach(btn => btn.addEventListener("click", openAccordionItems));

		// accordionPagon.forEach(btn => btn.addEventListener("click", openAccordionItems));


		
		dropBtnOne.addEventListener("click", added);
		dropBtnTwo.addEventListener("click", addedd);
		
		window.addEventListener("click", clickOutsideAccordion);

		navBtn.addEventListener("click", () => {
			let dupa = hamburgerNav.classList
			console.log(dupa);
			
			if(dupa.contains('active')){
				closeNav()
			}else{
				openNav()
			}



		} ); // otwarcie navigacji hbg
		// navBtn.addEventListener("click", closeNav); // zamknięcie navigacji hbg
	// })