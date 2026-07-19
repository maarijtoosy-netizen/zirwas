/* ======================================================
   ZIRWAS WEBSITE
   SCRIPT.JS
   PART 1
====================================================== */

// ==========================
// SELECT ELEMENTS
// ==========================

const header = document.getElementById("header");

const menuBtn = document.getElementById("menu-btn");

const navbar = document.getElementById("navbar");

const topBtn = document.getElementById("topBtn");

const preloader = document.getElementById("preloader");

const navLinks = document.querySelectorAll("nav a");

// ==========================
// PRELOADER
// ==========================

window.addEventListener("load", () => {

    preloader.style.opacity = "0";

    preloader.style.visibility = "hidden";

    preloader.style.transition = "0.6s";

});

// ==========================
// STICKY HEADER
// ==========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,0.25)";
        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        header.style.background = "rgba(255,255,255,.15)";
        header.style.boxShadow = "none";

    }

});

// ==========================
// MOBILE MENU
// ==========================

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show-menu");

});

// Close menu after clicking a link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show-menu");

    });

});

// ==========================
// BACK TO TOP BUTTON
// ==========================

topBtn.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/* ======================================================
   SCRIPT.JS
   PART 2
   Scroll Effects • Active Navigation • FAQ • Animations
======================================================*/

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(

    ".category-card," +
    ".product-card," +
    ".feature-card," +
    ".review-card," +
    ".contact-card," +
    ".faq-item," +
    ".promo-box," +
    ".about-image," +
    ".about-content"

);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

// ==========================
// HERO IMAGE PARALLAX
// ==========================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const offset = window.scrollY * 0.08;

    heroImage.style.transform =
        `translateY(${offset}px)`;

});

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

document.querySelectorAll(".btn, .product-btn")
.forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.left =
            e.clientX -
            this.getBoundingClientRect().left -
            radius + "px";

        circle.style.top =
            e.clientY -
            this.getBoundingClientRect().top -
            radius + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

// ==========================
// SIMPLE FAQ ACCORDION
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    if(answer){

        answer.style.display = "none";

    }

    item.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other!==item){

                const otherAnswer = other.querySelector("p");

                if(otherAnswer){

                    otherAnswer.style.display = "none";

                }

            }

        });

        if(answer){

            answer.style.display =
                answer.style.display==="block"
                ? "none"
                : "block";

        }

    });

});

// ==========================
// CURRENT YEAR
// ==========================

const footerYear = document.querySelector("footer p:last-child");

if(footerYear){

    footerYear.innerHTML =
        "© " +
        new Date().getFullYear() +
        " ZIRWAS. All Rights Reserved.";

}

console.log("✅ ZIRWAS Website Loaded Successfully");
