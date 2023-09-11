//button poznaj nas
const buttonAboutUs = document.querySelector('.butt')
const buttonNews = document.querySelector('.buttonNews')


console.log(buttonNews);

document.addEventListener('DOMContentLoaded', function(){

    
    const scrollMeetUs = () => {
        window.scrollTo(0,850);
    }
    const scrollNews = () => {
        window.scrollTo(0,5870);
    }


    buttonAboutUs.addEventListener('click', scrollMeetUs);
            buttonNews.addEventListener('click', scrollNews);
})