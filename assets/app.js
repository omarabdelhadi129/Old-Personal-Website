const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav_menu");
const navLogo = document.querySelector("#nav_logo");

const lang1 = document.getElementById("lang1");

// function to hide mobile menu 
function hideMobile() {
    const menuBar = document.querySelector(".is-active");

    if (window.innerWidth <= 960 && menuBar) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    }
}

// Adding the event listner for mobile menu view 
menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});


// Adding event listners to remove mobile 
menuLinks.addEventListener("click", hideMobile);
navLogo.addEventListener("click", hideMobile);

// Adding event listner for navlogo
navLogo.addEventListener("click", function () {
    window.location.href = "#about"
})