// **************
// DOM SELECTORS
// **************
const submitBtn = document.getElementById("submitBtn");
const alert = document.getElementById("alert");
const alertMsg = document.getElementById("alertMsg");

// **************
// FUNCTIONS
// **************
// Show error alerts
const showErrorAlert = () => {
  alertHeading.innerText = "Are you forgetting something?";
  alertMsg.innerText =
    "Please enter some text in the input box above before pressing the button.";
  alert.classList.add("alert-danger");
  alert.classList.remove("invisible");
};

// Reset all alerts: Alerts don't show up
const resetAlerts = () => {
  alert.classList.add("invisible");
  alert.classList.remove("alert-danger");
  alert.classList.remove("alert-primary");
  alert.classList.remove("alert-warning");
  alertMsg.classList.remove("display-6");
  alertMsg.innerText = "";
  alertHeading.innerText = "";
};

// Reverse the string
const reverseString = (userInput) => {
  return userInput.split("").reverse().join("");
};

// Display the reversed string in the DOM
const displayResult = (isPalindrome, string) => {
  if (isPalindrome) {
    alertHeading.innerText = "You are right!";
    alertMsg.innerText = `"${string}" is a palindrome.`;
    alert.classList.add("alert-primary");
  } else {
    alertHeading.innerText = "Oh no!";
    alertMsg.innerText = `"${string}" is NOT a palindrome.`;
    alert.classList.add("alert-warning");
  }
  alertMsg.classList.add("display-6");
  alert.classList.remove("invisible");
};

// Capture user's input, validate it,
// check if it's a palindrome, and display the results
const getUserInput = () => {
  // Clear previously shown alerts
  resetAlerts();

  // Get user's input
  const userString = document.getElementById("userString");

  // Check if a valid string was entered
  if (!userString.value.trim() || userString.value.length === 0) {
    // If invalid string was entered, display an alert message
    showErrorAlert();
  } else {
    // If valid string was entered:
    // Strip the string of any special characters
    const regExp = /[\W_]/g;
    const strippedUserString = userString.value.replace(regExp, "");

    // Reverse the string using a helper function
    const reversedString = reverseString(strippedUserString);

    // Check if the reversed string === the string entered by the user
    // isPalindrome is true if the two strings are the same. Otherwise, its false
    const isPalindrome =
      strippedUserString.toLowerCase() === reversedString.toLowerCase();

    // Display the reversed string in the DOM
    displayResult(isPalindrome, userString.value);
  }

  // Reset the input to empty state for the user's next input
  userString.value = "";
};

// **************
// EVENT LISTENERS
// **************
submitBtn.addEventListener("click", getUserInput);
