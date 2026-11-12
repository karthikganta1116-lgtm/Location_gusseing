// Location questions and clues
const locations = [
    {
        answer: "taj mahal",
        clues: [
            "This monument is one of the Seven Wonders of the World.",
            "It was built by Mughal Emperor Shah Jahan.",
            "It is located in Agra, Uttar Pradesh."
        ]
    },

    {
        answer: "paris",
        clues: [
            "This city is famous for its romantic atmosphere.",
            "It is home to the Eiffel Tower.",
            "It is the capital of France."
        ]
    },

    {
        answer: "new york",
        clues: [
            "This city is known as the Big Apple.",
            "It is home to the Statue of Liberty.",
            "It is one of the most famous cities in the USA."
        ]
    }
];

// Game variables
let currentQuestion = 0;
let currentClue = 0;
let score = 0;

// Start game
function startGame() {

    currentQuestion = 0;
    currentClue = 0;
    score = 0;

    document.getElementById("score").innerText = score;
    document.getElementById("question-number").innerText = currentQuestion + 1;

    document.getElementById("start-btn").style.display = "none";

    showClue();

}

// Display clue
function showClue() {

    document.getElementById("clue").innerText =
        locations[currentQuestion].clues[currentClue];

    document.getElementById("answer").value = "";

    document.getElementById("message").innerText = "";

    document.getElementById("submit-btn").style.display = "inline-block";

    document.getElementById("next-clue-btn").style.display = "none";

}

// Check answer
function checkAnswer() {

    let userAnswer = document.getElementById("answer").value
        .trim()
        .toLowerCase();

    let correctAnswer = locations[currentQuestion].answer;

    if (userAnswer === "") {
        document.getElementById("message").innerText =
            "Please enter your answer!";
        return;
    }

    if (userAnswer === correctAnswer) {

        let points = [100, 80, 60];

        score += points[currentClue];

        document.getElementById("score").innerText = score;

        document.getElementById("message").innerText =
            "Correct Answer! You earned " + points[currentClue] + " points!";

        document.getElementById("submit-btn").style.display = "none";

        document.getElementById("next-clue-btn").style.display = "inline-block";

        document.getElementById("next-clue-btn").innerText = "Next Question";

    } else {

        document.getElementById("message").innerText =
            "Wrong answer! Try the next clue.";

        document.getElementById("submit-btn").style.display = "none";

        document.getElementById("next-clue-btn").style.display = "inline-block";

        if (currentClue === 2) {

            document.getElementById("message").innerText =
                "Sorry! The correct answer is " + correctAnswer;

            document.getElementById("next-clue-btn").innerText = "Next Question";

        } else {

            document.getElementById("next-clue-btn").innerText = "Show Next Clue";

        }

    }

}

// Move to next clue or question
function showNextClue() {

    if (currentClue < 2 &&
        document.getElementById("submit-btn").style.display !== "none") {
        return;
    }

    if (currentClue < 2 &&
        document.getElementById("message").innerText.startsWith("Wrong")) {

        currentClue++;
        showClue();

    } else {

        currentQuestion++;

        if (currentQuestion < locations.length) {

            currentClue = 0;

            document.getElementById("question-number").innerText =
                currentQuestion + 1;

            showClue();

        } else {

            endGame();

        }

    }

}

// End game
function endGame() {

    document.getElementById("clue").innerText =
        "Congratulations! You completed the game.";

    document.getElementById("answer").style.display = "none";

    document.getElementById("submit-btn").style.display = "none";

    document.getElementById("next-clue-btn").style.display = "none";

    document.getElementById("message").innerText =
        "Your final score is: " + score + " points!";

    document.getElementById("start-btn").style.display = "inline-block";

    document.getElementById("start-btn").innerText = "Play Again";

}