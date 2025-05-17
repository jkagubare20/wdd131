const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified on: ${lastModifiedDate}`;


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('menu');
    const navlist = document.querySelector('nav');
    
    if (hamburger && navlist) {
        hamburger.addEventListener('click', () => {
            navlist.classList.toggle('open');
            hamburger.classList.toggle('open');
        });
    }
});