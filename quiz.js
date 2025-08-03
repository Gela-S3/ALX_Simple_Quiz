// Detailed Instructions:

// 1. Start with the Function Declaration:
// Define a function named checkAnswer. This function will be called when the user submits their answer.
function checkAnswer() {
    // 2. Identify the Correct Answer:
    // Inside the checkAnswer function, declare a variable named correctAnswer
    // and assign it the string value "4".
    const correctAnswer = "4";

    // 3. Retrieve the User’s Answer:
    // Use document.querySelector to select the checked radio button by its name attribute name="quiz".
    // Access the .value property of the selected radio button to get the user’s answer.
    // Store this value in a variable named userAnswer.
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";
    if (selectedChoice) {
        userAnswer = selectedChoice.value;
    }

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // 4. Compare the User’s Answer with the Correct Answer:
    // Implement an if statement to compare userAnswer with correctAnswer.
    if (userAnswer === correctAnswer) {
        // If the values match, indicating the user’s answer is correct,
        // change the textContent of the element with the ID feedback to "Correct! Well done.".
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        // If the values do not match, indicating the user’s answer is incorrect,
        // update the textContent of the feedback element to "That's incorrect. Try again!".
        // Also handle the case where no answer is selected.
        if (userAnswer === "") {
            feedbackElement.textContent = "Please select an answer.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    }
}

// 5. Add an Event Listener to the Submit Button:
// Use document.getElementById to select the “Submit Answer” button by its ID, "submit-answer".
// Add a click event listener to this button, passing in the checkAnswer function as the callback
// to be executed when the button is clicked.
// Ensure you are not calling the checkAnswer function directly in the event listener
// (i.e., do not add () after the function name in the addEventListener call).
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);