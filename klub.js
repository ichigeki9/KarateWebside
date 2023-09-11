const images = document.querySelectorAll(".gallery-container img");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup img");
const cross = document.querySelector(".cross");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

let curretIndex;

// const showPopup = (e) => {
// 	// let imgSrc;

// 	// imgSrc = e.target.src;

// };

const closePopup = () => {
	popup.classList.add("hidden");
};

cross.addEventListener("click", closePopup);

images.forEach((image, index) => {
	image.addEventListener("click", (e) => {
		popup.classList.remove("hidden");
		popupImg.src = e.target.src;
		curretIndex = index;
	});
});

arrowRight.addEventListener("click", () => {
	if (curretIndex === images.length - 1) {
		curretIndex = 0;
    } else {
        curretIndex++;
    }
	popupImg.src = images[curretIndex].src;
});

arrowLeft.addEventListener("click", () => {
    if (curretIndex === 0 ) {
		curretIndex = images.length -1;
    } else {
        curretIndex--;
    }
    // console.log(curretIndex);
    // console.log(images.length);
	popupImg.src = images[curretIndex].src;
});

// document.addEventListener('click', e => {
//     console.log(e.target.getAtribute);
// })
