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


const cstCarousel = document.querySelector('.custom-carousel');
////////////////////////////
let mainPosts = document.querySelectorAll(".main-post");
let posts = document.querySelectorAll(".post");

let i = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];

let progressInterval = setInterval(progress, 100); // 180

function progress() {
  if (i === 100) {
    i = -5;
    // reset progress bar
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = 0;
    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

    // reset postIndex to loop over the slides again
    if (postIndex === posts.length) {
      postIndex = 0;
    }

    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } else {
    i++;
    currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = `${i}%`;
    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
}
///////////////////////////


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
