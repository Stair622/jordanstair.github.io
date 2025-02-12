// Simple JavaScript Quiz Game

// Array of questions (23) with answer choices and the correct answer
const questions = [
    { question: "What is the index of the first element in an array?", choices: ["0", "1", "-1", "Depends"], answer: "0" },
    { question: "What method is used to remove the last item from an array?", choices: ["push()", "pop()", "shift()", "unshift()"], answer: "pop()" },
    { question: "What keyword is used to declare a variable in JavaScript?", choices: ["var", "let", "const", "All of the above"], answer: "All of the above" },
    { question: "What is the Comparison Operation for less than or equal to?", choices: [">=", "===", "<=", "<=="], answer: "<=" },
    { question: "What method is used to extract a substring from a string?", choices: ["slice()", "splice()", "sub()", "extract()"], answer: "slice()" },
    { question: "What method is used to add one or more items to the end of an array?", choices: ["pack()", "slice()", "pop()", "push()"], answer: "push()" },
    { question: "What is the logic operation for OR?", choices: ["--", "//", "||", "&&"], answer: "||" },
    { question: "What does the map() function do?", choices: ["Modifies the original array", "Creates a new array", "Filters elements", "Sorts elements"], answer: "Creates a new array" },
    { question: "Which method removes the first element of an array?", choices: ["pop()", "shift()", "unshift()", "splice()"], answer: "shift()" },
    { question: "Which array method joins all elements into a string?", choices: ["concat()", "join()", "split()", "toString()"], answer: "join()" },
    { question: "Which operator is used to check both value and type?", choices: ["==", "===", "!=", "!=="], answer: "===" },
    { question: "What is the file extension for JavaScript?", choices: [".html", ".jvs", ".css", ".js"], answer: ".js" },
    { question: "What does the break statement do?", choices: ["Terminates the current loop or switch statement", "Deletes an item from a collection", "Removes a portion of text or data", "None of the above"], answer: "Terminates the current loop or switch statement" },
    { question: "Which are appropriate ways to add comments in JavaScript?", choices: [">>", "//", "/* */", "// and /* */"], answer: "// and /* */" },
    { question: "Which is the appropriate way to wrap a string text?", choices: ["Single Quotes", "Double Quotes", "Backsticks", "All of the above"], answer: "All of the above" },
    { question: "Inside a template literal, you can wrap JavaScript variables or expressions inside which of the following?", choices: ["${}", "^{}", "!()", "None of the above()"], answer: "${}" },
    { question: "Which function allows the user to answer a question via a popup dialog box?", choices: ["textbox.prompt()", "dialog.prompt()", ".addEventListener()", "window.prompt()"], answer: "window.prompt()" },
    { question: "What loop can you use instead of a for..of loop to iterate through a collection?", choices: ["if", "if...else", "for", "None of the above"], answer: "for" },
    { question: "Which statement is used to terminate the current loop or switch statement?", choices: ["focus()", "extract()", "sub()", "break()"], answer: "break()" },
    { question: "What does the Math.random() method do?", choices: ["Generates a random whole number between 0 and 1", "Generates a random decimal number between 0 and 1", "Generates a random math problem", "Generates a random negative number"], answer: "Generates a random decimal number between 0 and 1" },
    { question: "What function checks if a value is <b>not a number?</b>", choices: ["pop()", "isNum()", "splice()", "isNaN()"], answer: "isNaN()" },
    { question: "Which is a correct example of Dot Notation?", choices: ["person['age']", "person.age;", "person:age;", "person[name']['first']';"], answer: "person.age;" },
    { question: "What is the typical order for developing a webpage, commonly referred to as <b>'Separation of concern'</b>?", choices: ["HTML, CSS, JS", "JS, HTML, CSS", "CSS, JS, HTML", "HTML, JS, CSS"], answer: "HTML, CSS, JS" },

];

let score = 0; // Keeps track of the user's score (a variable to store the user's score)
let questionIndex = 0; // Tracks the number of questions asked (a variable to store the index of the current question)

const button = document.getElementById("start"); // A variable to store the start button
button.addEventListener("click", startQuiz); // a function to start the quiz

// Function to shuffle questions in random order
function shuffleQuestions() {
    // Loop through the array starting from the last element down to the second element
    for (let i = questions.length - 1; i > 0; i--) {
        // Generate a random index 'j' between 0 and 'i' (inclusive)
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
        // Swap the elements at index 'i' and 'j' to randomize their positions
    }
}

// Function to start the quiz
function startQuiz() {
    shuffleQuestions();
    button.textContent = "Submit Answer";
    document.getElementById("good-luck").textContent = "Good Luck!";
    button.removeEventListener("click", startQuiz);
    button.addEventListener("click", submitAnswer);
    askQuestion();
}

// Function to ask a question
function askQuestion() {
    if (questionIndex < questions.length) {
        let q = questions[questionIndex];
        document.getElementById("question-box").innerHTML = `<p>${q.question}</p><ul style="list-style-type: none; padding: 0;">${q.choices.map(choice => `<li>${choice}</li>`).join('')}</ul>`;
        
    } else {
        let message = score >= 2000 ? "Keep up the good work!" : "Keep Studying!"; // Displays a message based on the user's score
        document.getElementById("question-box").innerHTML = `<p>Quiz Over! Your final score is: ${score}</p>`; // Displays the final score
        button.style.display = "none";

        // Creates a play again button to restart the game
        let playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again!";
        playAgainButton.id = "play-again";
        playAgainButton.style.display = "block";
        playAgainButton.style.marginTop = "10px";
    
        // Append the "Play Again" button to the question box
        document.getElementById("question-box").appendChild(playAgainButton);

        // Add event listener to restart the game when clicked
        playAgainButton.addEventListener("click", function() {
            restartQuiz();
        });
        

    }
    document.getElementById("updateScore").textContent = score;
}

// Function to check the user's answer
function submitAnswer() {
    // Declares a variable to store the user's answer
    let userAnswer;
    do {
        userAnswer = prompt("Enter your answer:");
    } while (!userAnswer || userAnswer.trim() === "");

    let correctAnswer = questions[questionIndex].answer;
    let feedbackImage = document.getElementById("image-after-button");

    // Creates an image element to display answer feedback
    if (!feedbackImage) {
        feedbackImage = document.createElement("img");
        feedbackImage.id = "image-after-button";
        feedbackImage.style.width = "45px";
        button.parentNode.insertBefore(feedbackImage, button.nextSibling);
    }

    // Checks if the user's answer is correct
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct! +100 points");
        score += 100;
        feedbackImage.src = "images/smiley.png"; // Displays a smiley face
    } else {
        alert(`Incorrect! The correct answer is: ${correctAnswer}`);
        feedbackImage.src = "images/frowny.png"; // Dsiplays a frowny face
    }
    questionIndex++;
    askQuestion(); // Ask the next question
}

    // Function to reset the quiz
function restartQuiz() {
    score = 0; // Reset score
    questionIndex = 0; // Reset question index
    shuffleQuestions(); // Shuffle questions for a new attempt

    // Reset the score display
    document.getElementById("updateScore").textContent = score;

    // Reset the button
    button.style.display = "block";
    button.textContent = "Submit Answer";

    // Ensures "Play Again" button is removed safely
    let playAgainButton = document.getElementById("play-again");
    if (playAgainButton) {
        playAgainButton.remove();
    }
    askQuestion(); // Start the quiz again
}


