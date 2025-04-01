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