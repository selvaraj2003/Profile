
// Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Experience tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Skills animation
const skillProgressBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
    skillProgressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// Intersection Observer for skills animation
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Contact form handling
 (function(){
        emailjs.init("Yos2z9MYp7xRMHCrC"); // Replace with your EmailJS Public Key
    })();

    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.sendForm("service_kdejste", "template_tuos09s", this)
        .then(() => {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            contactForm.reset();

            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        })
        .catch(() => {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        });
    });

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function () {
    // Add any initialization code here
});