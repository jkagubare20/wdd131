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
const posts = [
  {
    postTitle: "Post Title",
    date: "2005, August, 7",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/blogimg.webp",
    imageAlt: "Image", 
  },
  {
    postTitle: "Post Title",
    date: "1888, May, 21",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/blogimg2.jpeg",
    imageAlt: "Image",
  },
  {
    postTitle: "Post Title",
    date: "2015, June, 7",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/blogimg3.jpeg",
    imageAlt: "Image",
  },
  {
    postTitle: "Post Title",
    date: "2020, May, 2",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/blogimg4.webp",
    imageAlt: "Image",
  },
  {
    postTitle: "Post Title",
    date: "1974, November, 19",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/blogimg.webp",
    imageAlt: "Image",
  },
  {
    postTitle: "Post Title",
    date: "1986, January, 10",
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/blogimg2.jpeg",
    imageAlt: "Image",
    
  },
  {
    postTitle: "Post Title",
    date: "1983, December, 2", 
    postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "images/blogimg3.jpeg",
    imageAlt: "Image",
  },
    {
      postTitle: "Post Title",
      date: "1893, April, 6",
      postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: "images/blogimg4.webp",  
      imageAlt: "Image",
    },
    {
      postTitle: "Post Title",
      date: "2016, March, 20",
      postDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageSrc: "images/blogimg.webp",
      imageAlt: "Image",
    }
];

function createPostCards(filteredPosts) {
    const postCardsContainer = document.querySelector('.post-container');
    
    postCardsContainer.innerHTML = ''; // Clear previous cards

    filteredPosts.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('post-card');

        const image = document.createElement('img');
        image.src = post.imageSrc; // this is the image URL
        image.alt = `${post.imageAlt} `; // alt text for the image
        image.loading = 'lazy'; // lazy loading for performance
        image.width = '600';
        image.height = '402';
        image.srcset = `${post.imageSrc} 300w, ${post.imageSrc} 400w`; // responsive image sizes

        const date = document.createElement('p');
        date.textContent = `${post.date}`;

        const name = document.createElement('h3');
        name.textContent = post.postTitle;

        const description = document.createElement('p');
        description.textContent = `${post.postDescription}`;

        card.appendChild(image);
        card.appendChild(date);
        card.appendChild(name);
        card.appendChild(description);

        postCardsContainer.appendChild(card);
    });

}

createPostCards(posts);