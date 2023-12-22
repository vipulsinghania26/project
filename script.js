document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar ul');


    navToggle.addEventListener('click', function () {
        console.log('Toggle button clicked!');
        navbar.classList.toggle('active');
    });


    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbar.classList.remove('active');
        });
    });


    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky navigation bar on scroll
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('.social');

        if (scrollPosition > header.offsetHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });

    // Scroll-to-top button
    const scrollUpButton = document.querySelector('.scroll-up');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollUpButton.classList.add('show');
        } else {
            scrollUpButton.classList.remove('show');
        }
    });

    scrollUpButton.addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});

