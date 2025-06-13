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
    
    // Clear previous cards
    postCardsContainer.innerHTML = '';

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

document.addEventListener('DOMContentLoaded', () => {
    createPostCards(posts);
});

const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', () => {
  window.location.href = 'contact.html';

});

// Topic array
const topics = [
  {
    id: "Books",
    name: "Books & Ideas",
  },
  {
    id: "Productivity",
    name: "Productivity",
  },
  {
    id: "Society",
    name: "Society & Culture",
  },
  {
    id: "Youth",
    name: "Youth & Purpose",
  },
  {
    id: "All",
    name: "All Topics",
  }
];

function populateTopics() {
  const topicSelect = document.getElementById("topics");
  
  if (!topicSelect) {
    console.error("Element with id 'topics' not found");
    return;
  }

  // Clear existing options except the first placeholder option
  while (topicSelect.children.length > 1) {
    topicSelect.removeChild(topicSelect.lastChild);
  }
  // Add product options
  topics.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic.id;
    option.textContent = topic.name;
    topicSelect.appendChild(option);
  });
}
// Call the function when the page loads
document.addEventListener("DOMContentLoaded", () => {
  populateTopics();
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("submit");

  form.addEventListener("click", () => {
    // Get current number of reviews from localStorage
    let numReviews = Number(localStorage.getItem("numReviews-ls")) || 0;
    
    // Increment the counter
    numReviews++;
    
    // Store the updated counter
    localStorage.setItem("numReviews-ls", numReviews);
  });
});