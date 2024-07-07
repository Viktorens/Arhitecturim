const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const word = document.getElementsByClassName("random-letters-effect")

function randomizeNameLetters(word) {
    let iterations = 0
    
    const interval = setInterval(() => {
        word.target.innerText = word.target.innerText.split("")
        .map((letter,index) => {
            if(index < iterations) {
                return word.target.dataset.value[index]
            }
            return letters[Math.floor(Math.random()*26)]
        })
        .join("")
    
    if (iterations >= word.target.dataset.value.length) clearInterval(interval)
    
    iterations += 1 / 3
    }, 30)
}

for (var i = 0; i < word.length; i++) {
    word[i].addEventListener("click", randomizeNameLetters)
    word[i].addEventListener("mouseover", randomizeNameLetters)
}

/**
 * Menu Overlay - Animations
 */

// Opens the overlay
function openNav() {
    var menuButton = document.getElementById("navbar");
    var scrollToTopButton = document.getElementById("scroll-to-top-container");

    document.getElementById("my-nav").style.left = "0%";
    menuButton.style.top = "-100px";
    scrollToTopButton.style.bottom = "-100px";
}

// Closes the overlay
function closeNav() {
    var menuButton = document.getElementById("navbar");
    var scrollToTopButton = document.getElementById("scroll-to-top-container");

    document.getElementById("my-nav").style.left = "-100%";
    menuButton.style.top = "0";
    scrollToTopButton.style.bottom = "50px";
}

/**
 * Scrolls up the navbar
 */

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
var prevScrollpos = window.pageYOffset;

async function handleNavbar() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || window.pageYOffset <= 50) {
        document.getElementById("navbar").style.top = "0";
    } else {
        await delay(100);
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
document.addEventListener("scroll", handleNavbar);

/**
 * Elements fade in/out on scroll
 */

function revealElements() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 25;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealElements);

// animation for revealing the menu buttons
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-elements-fade');
        } else {
            entry.target.classList.remove('show-elements-fade');
        }
    });
});
const hiddenMenuElementsFade = document.querySelectorAll('.hide-menu-elements-fade');
hiddenMenuElementsFade.forEach((element) => observer.observe(element));