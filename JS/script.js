document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("nav-menu");
    const hamburger = document.querySelector(".hamburger");

    // Toggle menu visibility
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    function toggleMenu() {
        const menu = document.getElementById("nav-menu");
        menu.classList.toggle("show");
    }

    // Close menu when a link is clicked (for better UX on mobile)
    document.querySelectorAll("#nav-menu li a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("show");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".photo-grid img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            lightboxImg.src = this.src;
            lightbox.classList.add("show"); // Add fade-in effect
        });
    });

    // Close the lightbox when clicking the "X"
    window.closeLightbox = function () {
        lightbox.classList.remove("show");
        setTimeout(() => { lightbox.style.display = "none"; }, 400); // Delay to match fade-out
    };
});

const roles = ["WEB DESIGNER", "PHOTOGRAPHER", "VIDEOGRAPHER", "SOFTWARE DEVELOPER"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 150; // Speed of typing
const erasingSpeed = 100; // Speed of erasing
const delayBetweenRoles = 2000; // Delay before switching roles

const typingElement = document.querySelector(".typing-effect");

function type() {
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
        setTimeout(type, typingSpeed);
    }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenRoles);
});


function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}