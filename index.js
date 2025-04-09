// 🙅‍♂️ STOP right there, developer! 😄
// 🧠 JavaScript je tu len na pozadí – ovláda funkcie tlačidiel a interakcie.
// JavaScript zatiaľ necháme mimo misie. Vráť sa naspäť do HTML a CSS, kde čaká tvoj mimozemšťan na záchranu!

const darkModeButton = document.getElementById("mode");
const profileCard = document.getElementById("profile-card");
const fuelButton = document.getElementById("fuel");
const drainButton = document.getElementById("drain");
const fuelStatus = document.getElementById("fuelPercentage");
const fuelBar = document.getElementById("fuelBar");

let fueling = false;
let draining = false;

// Dark Mode Toggle
darkModeButton.addEventListener("click", function() {
    profileCard.classList.toggle("dark-mode");
});

// Function to start fueling
function startFueling() {
    if (fueling) return;
    
    let fuelLevel = parseInt(fuelStatus.textContent);
    fueling = true;

    const fuelInterval = setInterval(() => {
        if (fuelLevel < 100 && fueling) {
            fuelLevel += 1;
            fuelStatus.textContent = `${fuelLevel}%`;
            fuelBar.style.width = `${fuelLevel}%`;

            if (fuelLevel === 100) {
                fuelBar.style.background = "limegreen";
               
                stopFueling();
            }
        } else {
            clearInterval(fuelInterval);
            fueling = false;
        }
    }, 90);

    // Stop fueling when button is released
    fuelButton.addEventListener("mouseup", stopFueling);
    fuelButton.addEventListener("mouseleave", stopFueling);
}

// Function to stop fueling
function stopFueling() {
    fueling = false;
}

// Function to start draining
function startDraining() {
    if (draining) return;

    let fuelLevel = parseInt(fuelStatus.textContent);
    draining = true;

    const drainInterval = setInterval(() => {
        if (fuelLevel > 0 && draining) {
            fuelLevel -= 1;
            fuelStatus.textContent = `${fuelLevel}%`;
            fuelBar.style.width = `${fuelLevel}%`;

            if (fuelLevel === 0) {
                fuelBar.style.background = "red";
             
                stopDraining();
            }
        } else {
            clearInterval(drainInterval);
            draining = false;
        }
    }, 90);

    // Stop draining when button is released
    drainButton.addEventListener("mouseup", stopDraining);
    drainButton.addEventListener("mouseleave", stopDraining);
}

// Function to stop draining
function stopDraining() {
    draining = false;
}

// Event listeners for holding buttons
fuelButton.addEventListener("mousedown", startFueling);
drainButton.addEventListener("mousedown", startDraining);
