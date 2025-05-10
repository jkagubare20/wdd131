// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year in the span with id "currentyear"
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Output the last modified date in the span with id "lastModified"
document.getElementById("lastModified").textContent = `Last modified on: ${lastModifiedDate}`;
