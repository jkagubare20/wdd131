document.getElementById('currentyear').textContent = new Date().getFullYear()

document.getElementById('lastModified').textContent = document.lastModified

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
    postTitle: "Post Title",
    date: "2005, August, 7",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/placeholder.webp",
    imageAlt: "Placeholder Image", 
  },
  {
    postTitle: "Post Title",
    date: "1888, May, 21",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/placeholder.webp",
  },
  {
    postTitle: "Post Title",
    dedicated: "2015, June, 7",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/placeholder.webp",
  },
  {
    postTitle: "Post Title",
    dedicated: "2020, May, 2",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/placeholder.webp",
  },
  {
    postTitle: "Post Title",
    dedicated: "1974, November, 19",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/placeholder.webp",
  },
  {
    postTitle: "Post Title",
    dedicated: "1986, January, 10",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/placeholder.webp",
    
  },
  {
    postTitle: "Post Title",
    dedicated: "1983, December, 2", 
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/placeholder.webp",
  },
    {
      postTitle: "Post Title",
      dedicated: "1893, April, 6",
      postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: "images/placeholder.webp",
    },
    {
      postTitle: "Post Title",
      dedicated: "2016, March, 20",
      postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: "images/placeholder.webp",
    }

  
];