// Reference to the checkbox for dark mode toggle
const colorSwitch = document.getElementById('color_toggle'); 

// Reference to the heading div where the image background is set
const headerImage = document.querySelector('.heading');

// Function to apply dark mode
function darkModeOn() {
  document.body.classList.add("dark-mode"); // Enable dark mode
  if (headerImage) {
    headerImage.style.backgroundImage = "url('./rosario_nighttime.jpg')"; // Change to dark mode background
  }
}

// Function to disable dark mode
function darkModeOff() {
  document.body.classList.remove("dark-mode"); // Disable dark mode
  if (headerImage) {
    headerImage.style.backgroundImage = "url('./rosario_daytime-transformed.png')"; // Change to light mode background
  }
}

// Function to check the mode based on the toggle state
function checkMode() {
  if (colorSwitch.checked) {
    darkModeOn(); // Enable dark mode
  } else {
    darkModeOff(); // Disable dark mode
  }
}

// Save the mode in localStorage
function saveMode() {
  localStorage.setItem("isDarkMode", colorSwitch.checked); // Store the preference
}

// Function to initialize the mode on page load
function initMode() {
  const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode")); // Get the stored preference
  colorSwitch.checked = isDarkMode; // Set the checkbox state
  checkMode(); // Apply the correct mode based on the stored preference
}

// Ensure the color switch exists before adding the event listener
if (colorSwitch) {
  // Trigger the correct behavior on mode change
  colorSwitch.addEventListener('change', () => {
    checkMode(); // Update the mode
    saveMode(); // Store the preference
  });

  // Initialize the correct mode when the page first loads
  initMode(); // Apply the correct mode at the start
}

  
