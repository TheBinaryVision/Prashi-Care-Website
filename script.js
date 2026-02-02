// 1. Initialize Animations (AOS)
// This makes the elements fade in when you scroll
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// 2. Mobile Menu Toggle Logic
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

// Only run this code if the button actually exists
if(btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// 3. Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('#mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Safe check to ensure menu exists before trying to close it
        if(menu) menu.classList.add('hidden');
    });
});

// 4. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 5. Contact Form Handling (The Fix)
const contactForm = document.querySelector('form[name="contact"]');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // If we are just testing locally, stop the 404 error
        if (window.location.hostname === "" || window.location.hostname === "127.0.0.1") {
            e.preventDefault(); // Stop the form from trying to "post" to your hard drive
            alert("Thank you! (Test Mode: Form works perfectly. Once deployed to Netlify, this will send you an email.)");
            contactForm.reset();
        } 
        // If we are on the live website (Netlify), let it handle the data normally.
        // Netlify will automatically show a 'Thank You' page or you can handle it via AJAX here.
    });
}