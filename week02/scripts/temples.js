const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified on: ${lastModifiedDate}`;

// JavaScript for hamburger menu toggle 
const hamburger = document.querySelector('#menu');
const nav = document.querySelector('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active'); // You'll need to style .nav.active in CSS
           // You might want to change hamburger icon to an X when open
    });
}