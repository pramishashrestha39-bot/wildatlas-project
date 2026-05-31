// Smooth scrolling for homepage links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});


// FAQ ACCORDION

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

        } else {

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});
// MOBILE MENU

const mobileMenu = document.getElementById("mobile-menu");

const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// SLIDESHOW

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(){

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(showSlide, 3000);
