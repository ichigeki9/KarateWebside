const dropdownOne = document.querySelector(".dropdown-container-one");
const dropdownTwo = document.querySelector(".dropdown-container-two");
const dropBtnOne = document.querySelector(".dropBtn-one");
const dropBtnTwo = document.querySelector(".dropBtn-two");

// MOBILE NAV 
const hamburgerNav = document.querySelector(".hamburger-nav");
const navBtn = document.querySelector(".hamburger");

// FOOTER YEAR STRONA GRID


const handleNav = () => {
    navBtn.classList.toggle('is-active');
    hamburgerNav.classList.toggle('nav--active');
}

navBtn.addEventListener('click', handleNav)


const added = () => {
  dropdownOne.classList.toggle("visible");
}
const addedd = () => {
  dropdownTwo.classList.toggle("visible");
}


dropBtnOne.addEventListener('click', added)
dropBtnTwo.addEventListener('click', addedd)