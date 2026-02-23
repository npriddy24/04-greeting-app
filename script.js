// We store a default name in a variable.
// We use let because we will update this value from the input field.
let userName = "friend";

// Find the button in the HTML by its id.
let welcomeButton = document.getElementById("welcomeButton");

// Find the input field in the HTML by its id.
let nameInput = document.getElementById("nameInput");

// Create a paragraph element in JavaScript.
// This will hold our welcome message below the button.
let message = document.createElement("p");

// Add the paragraph under the button.
welcomeButton.insertAdjacentElement("afterend", message);

// Run this function when the button is clicked.
welcomeButton.addEventListener("click", function () {
	// Get what the user typed in the input field.
	let typedName = nameInput.value.trim();

	// If the user typed something, use that name.
	if (typedName !== "") {
		userName = typedName;
	}

	// Build a string using concatenation.
	// This combines text + variable value into one fun message.
	message.textContent = "Hey " + userName + "! 🚀 You are ready to build something awesome today!";

	// Show the same message in the browser console for practice.
	console.log("Hey " + userName + "! 🚀 You are ready to build something awesome today!");
});