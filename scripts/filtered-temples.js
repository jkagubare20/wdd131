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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Provo City Center Utah",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, June, 3",
        area: 72000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    }

  
];

const oldTemples = document.querySelector('#old');
oldTemples.addEventListener('click', () => {
    let oldTemples = temples.filter(temple => temple.dedicated.startsWith('18'));
    createTempleCards(oldTemples);
});

const newTemples = document.querySelector('#new');
newTemples.addEventListener('click', () => {
    let newTemples = temples.filter(temple => temple.dedicated.startsWith('20'));
    createTempleCards(newTemples);
});

const largeTemples = document.querySelector('#large');
largeTemples.addEventListener('click', () => {
    let largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCards(largeTemples);
});

const smallTemples = document.querySelector('#small');
smallTemples.addEventListener('click', () => {
    let smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCards(smallTemples);
});

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    createTempleCards(temples); // Reset to show all temples
});


function createTempleCards(filteredTemples) {
    const templeCardsContainer = document.querySelector('.gallery-container');
    
    templeCardsContainer.innerHTML = ''; // Clear previous cards

    filteredTemples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');

        const image = document.createElement('img');
        image.src = temple.imageUrl; // this is the image URL
        image.alt = `${temple.templeName} Temple`; // alt text for the image
        image.loading = 'lazy'; // lazy loading for performance
        image.width = '300';
        image.height = '200';

        const name = document.createElement('h3');
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area} sq ft`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        templeCardsContainer.appendChild(card);
    });

}

createTempleCards(temples);