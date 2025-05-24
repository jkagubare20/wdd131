// Footer details
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last modified on: ${lastModifiedDate}`;

// Weather WindChill
function calculateWindChill(temperature, windSpeed) {
    // fahrenheit to celsius
    const tempF = (temperature * 9/5) + 32;
    const windMph = windSpeed * 0.621371;

    const windChillF = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windMph, 0.16)) + (0.4275 * tempF * Math.pow(windMph, 0.16));

    const windChillC = (windChillF - 32) * 5/9;

    return Math.round(windChillC);
}

document.addEventListener('DOMContentLoaded', function() {
    const tempElement = document.querySelector(".temp");
    const windElement = document.querySelector(".wind");
    
    if (tempElement && windElement) {
    
        const tempText = tempElement.textContent; // "Temperature: 20°C"
        const windText = windElement.textContent; // "Wind: 5 km/h"
        
        // Regex
        const temperature = parseFloat(tempText.match(/\d+/)[0]); // Extract 20
        const windSpeed = parseFloat(windText.match(/\d+/)[0]);   // Extract 5
        
        // Calculate windchill
        const windChill = calculateWindChill(temperature, windSpeed);
        

        const windchillElement = document.getElementById('windchill');
        if (windchillElement) { 
            windchillElement.textContent = windChill + '°C';
        }
    }
});