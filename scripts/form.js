// Set current year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified on: ${lastModifiedDate}`;

// Product array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Function to populate product options
function populateProducts() {
  const productSelect = document.getElementById("pname");
  
  // Clear existing options except the first placeholder option
  while (productSelect.children.length > 1) {
    productSelect.removeChild(productSelect.lastChild);
  }
  
  // Add product options
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", populateProducts);

// Handle form submission and review counter
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