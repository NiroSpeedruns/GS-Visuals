const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Rotation";
toggleButton.style.position = "absolute";
toggleButton.style.bottom = "10px";
toggleButton.style.left = "10px";
toggleButton.style.backgroundColor = "#FE7112";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "8px";
toggleButton.style.fontFamily = "Roboto, sans-serif";
toggleButton.style.transition = "background-color 0.2s ease";
toggleButton.style.outline = "none";
toggleButton.style.userSelect = "none";
toggleButton.style.color = "#000000";

const fullscreenButton = document.createElement("button");
fullscreenButton.textContent = "Toggle Fullscreen";
fullscreenButton.style.position = "absolute";
fullscreenButton.style.bottom = "10px";
fullscreenButton.style.left = "122px"; // Adjusted position
fullscreenButton.style.backgroundColor = "#FE7112";
fullscreenButton.style.border = "none";
fullscreenButton.style.borderRadius = "8px";
fullscreenButton.style.fontFamily = "Roboto, sans-serif";
fullscreenButton.style.transition = "background-color 0.2s ease";
fullscreenButton.style.outline = "none";
fullscreenButton.style.userSelect = "none";
fullscreenButton.style.color = "#000000";

// Create the invert colors button
const invertButton = document.createElement("button");
invertButton.textContent = "Invert Colors";
invertButton.style.position = "absolute";
invertButton.style.bottom = "10px";
invertButton.style.left = "330px"; // Adjusted position
invertButton.style.backgroundColor = "#FE7112";
invertButton.style.border = "none";
invertButton.style.borderRadius = "8px";
invertButton.style.fontFamily = "Roboto, sans-serif";
invertButton.style.transition = "background-color 0.2s ease";
invertButton.style.outline = "none";
invertButton.style.userSelect = "none";
invertButton.style.color = "#000000";

// Append the invert button to the body
document.body.appendChild(invertButton);

// Function to toggle invert colors
function toggleInvertColors() {
    const currentFilter = document.body.style.filter;
    if (currentFilter.includes("invert(1)")) {
        document.body.style.filter = currentFilter.replace("invert(1)", "").trim();
    } else {
        document.body.style.filter += " invert(1)";
    }
    updateFilters();
}

// Add event listener to the invert button
invertButton.addEventListener("click", toggleInvertColors);

invertButton.addEventListener("mouseenter", function() {
    invertButton.style.backgroundColor = "#FF832E";
});

invertButton.addEventListener("mouseleave", function() {
    invertButton.style.backgroundColor = "#FE7112";
});

// Create the blur toggle button
const blurButton = document.createElement("button");
blurButton.textContent = "Toggle Blur";
blurButton.style.position = "absolute";
blurButton.style.bottom = "10px";
blurButton.style.left = "245px"; // Adjusted position
blurButton.style.backgroundColor = "#FE7112";
blurButton.style.border = "none";
blurButton.style.borderRadius = "8px";
blurButton.style.fontFamily = "Roboto, sans-serif";
blurButton.style.transition = "background-color 0.2s ease";
blurButton.style.outline = "none";
blurButton.style.userSelect = "none";
blurButton.style.color = "#000000";

// Append the blur button to the body
document.body.appendChild(blurButton);

// Function to toggle blur effect
function toggleBlur() {
    const currentFilter = document.body.style.filter;
    if (currentFilter.includes("blur(10px)")) {
        document.body.style.filter = currentFilter.replace("blur(10px)", "").trim();
    } else {
        document.body.style.filter += " blur(10px)";
    }
    updateFilters();
}

// Ensure filters are applied correctly
function updateFilters() {
    document.body.style.filter = document.body.style.filter.trim().replace(/\s+/g, " ");
}

// Add event listener to the blur button
blurButton.addEventListener("click", toggleBlur);

blurButton.addEventListener("mouseenter", function() {
    blurButton.style.backgroundColor = "#FF832E";
});

blurButton.addEventListener("mouseleave", function() {
    blurButton.style.backgroundColor = "#FE7112";
});


// Create the button element
const hohsVisualsButton = document.createElement("button");
hohsVisualsButton.textContent = "HoHs Visuals"; // Set the button text
hohsVisualsButton.style.position = "fixed";
hohsVisualsButton.style.top = "-100px"; // Start hidden above the screen
hohsVisualsButton.style.left = "50%"; // Center horizontally
hohsVisualsButton.style.transform = "translateX(-50%)"; // Center horizontally
hohsVisualsButton.style.backgroundColor = "#FE7112";
hohsVisualsButton.style.border = "none";
hohsVisualsButton.style.borderRadius = "8px";
hohsVisualsButton.style.fontFamily = "Roboto, sans-serif";
hohsVisualsButton.style.transition = "transform 1s ease"; // Smooth transition
hohsVisualsButton.style.fontWeight = "bold";
hohsVisualsButton.style.fontSize = "33px";
hohsVisualsButton.style.color = "#000";

// Add the label "By Zacgamingpro1234" inside the button
const authorLabel = document.createElement("span");
authorLabel.textContent = "By Zacgamingpro1234";
authorLabel.style.display = "block"; // Display on a new line
authorLabel.style.fontWeight = "bold";
authorLabel.style.fontSize = "23px"; // Smaller font size
authorLabel.style.color = "#000"; // Gray color for the label

// Append the button and label to the body
document.body.appendChild(hohsVisualsButton);
hohsVisualsButton.appendChild(authorLabel); // Add the label inside the button

// Function to animate the button
function animateButton() {
    // Drop down
    hohsVisualsButton.style.transform = "translateX(-50%) translateY(140px)"; // Move down
    setTimeout(() => {
        // Go back up after 5 seconds
        hohsVisualsButton.style.transform = "translateX(-50%) translateY(-100px)"; // Move up
    }, 5500); // 5.5 seconds
}

hohsVisualsButton.addEventListener("mouseover", function() {
    hohsVisualsButton.style.backgroundColor = "#FF832E";
});

hohsVisualsButton.addEventListener("mouseout", function() {
    hohsVisualsButton.style.backgroundColor = "#FE7112";
});

hohsVisualsButton.addEventListener("click", () => {
    window.open("https://www.speedrun.com/users/Zacgamingpro1234", "_blank");
});

setTimeout(animateButton, 1000);

const toggleAllButton = document.createElement("button");
toggleAllButton.textContent = "<";
toggleAllButton.style.position = "absolute";
toggleAllButton.style.bottom = "10px";
toggleAllButton.style.left = "422px"; // Adjusted position
toggleAllButton.style.backgroundColor = "#FE7112";
toggleAllButton.style.border = "none";
toggleAllButton.style.borderRadius = "8px";
toggleAllButton.style.fontFamily = "Roboto, sans-serif";
toggleAllButton.style.transition = "background-color 0.2s ease, left 0.5s ease";
toggleAllButton.style.outline = "none";
toggleAllButton.style.userSelect = "none";
toggleAllButton.style.color = "#000000";
let buttonsVisible = true;

function toggleButtonsVisibility() {
    buttonsVisible = !buttonsVisible;
    toggleButton.style.display = buttonsVisible ? "block" : "none";
    fullscreenButton.style.display = buttonsVisible ? "block" : "none";
    blurButton.style.display = buttonsVisible ? "block" : "none";
    invertButton.style.display = buttonsVisible ? "block" : "none";

    // Change the button text and position
    if (buttonsVisible) {
        toggleAllButton.textContent = "<";
        toggleAllButton.style.left = "422px"; // Original position
        toggleAllButton.style.opacity = "1"; // Reset opacity
    } else {
        toggleAllButton.textContent = ">";
        toggleAllButton.style.left = "10px"; // New position
        toggleAllButton.style.opacity = "0.2"; // Set opacity to 10%
    }
}

toggleAllButton.addEventListener("click", toggleButtonsVisibility);

document.body.appendChild(toggleAllButton);



fullscreenButton.addEventListener("mouseenter", function() {
    fullscreenButton.style.backgroundColor = "#FF832E";
});

fullscreenButton.addEventListener("mouseleave", function() {
    fullscreenButton.style.backgroundColor = "#FE7112";
});

fullscreenButton.addEventListener("click", function() {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    }
});

document.body.style.backgroundColor = "#858585";
document.body.appendChild(fullscreenButton);


const unityContainer = document.querySelector("#unityContainer");
if (unityContainer) {
    unityContainer.style.position = "absolute";
    unityContainer.style.transform = "rotate(0deg)"; // Center placement with initial rotation
    unityContainer.style.transition = "transform 0.5s ease"; // Smoothen the transform change
}


toggleButton.addEventListener("mouseenter", function() {
    toggleButton.style.backgroundColor = "#FF832E";
});

toggleButton.addEventListener("mouseleave", function() {
    toggleButton.style.backgroundColor = "#FE7112";
});

document.body.style.overflow = "hidden"

toggleButton.addEventListener("click", function() {
    const currentRotation = unityContainer.style.transform.includes('rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
    unityContainer.style.transform = `${currentRotation}`;

    toggleButton.style.backgroundColor = "#FFB583";
    setTimeout(() => {
        toggleButton.style.backgroundColor = "#FE7112";
    }, 300);
});



document.body.style.backgroundColor = "#858585";
document.body.appendChild(toggleButton);
document.title = "HoH Player";

const faviconLink = document.createElement("link");

faviconLink.rel = "icon";
faviconLink.href = "https://i.imgur.com/RwAfBxO_d.webp?maxwidth=760&fidelity=grand";

document.head.appendChild(faviconLink);