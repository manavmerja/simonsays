# 🎮 Simon Says Game

> A classic memory puzzle game built using **HTML, CSS, and Vanilla JavaScript**. Test your memory by repeating the sequence of flashing colors!

![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📖 About The Project
This project was built as part of my **Web Development learning journey**. The goal was to understand **DOM Manipulation**, **Event Handling**, and **Game Logic** implementation in JavaScript.

The game generates a random sequence of colors. The player must repeat the sequence correctly to advance to the next level. If the player presses the wrong color, the game ends.

---

## 🚀 Features

-   **Interactive UI:** buttons flash white (game hint) and green (user click) for visual feedback.
-   **Level Tracking:** The game tracks your current level dynamically.
-   **Game Over Effect:** The screen flashes red when the wrong sequence is entered.
-   **Restart Functionality:** Press any key to restart immediately after losing.
-   **Responsive Design:** Centered layout using Flexbox.

---

## 🕹️ How to Play

1.  Open the game in your browser.
2.  Press **Any Key** on your keyboard to start the game.
3.  Watch the button that flashes.
4.  Click the same button.
5.  Wait for the next sequence (Previous Color + New Color).
6.  Repeat the sequence correctly to level up!
7.  If you miss, your score (Level) will be displayed.

---

## 🛠️ Tech Stack

-   **HTML5:** Structure of the game board.
-   **CSS3:** Styling, Flexbox layout, and Flash animations.
-   **JavaScript (ES6):** Game logic, Array manipulation, DOM events.

---

## 📸 Screenshots

*(Add a screenshot of your game here. Create a folder named 'screenshots' and save an image as 'gameplay.png')*

![Gameplay Preview](screenshots/gameplay.png)

---

## 💻 Code Highlight (Logic)

Here is how the game checks the user's answer against the game sequence:

```javascript
function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 250); // Move to next level
        }
    } else {
        // Game Over Logic
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

🚀 How to Run Locally
Clone this repository:

Bash

git clone [https://github.com/YOUR_USERNAME/simon-says-game.git](https://github.com/YOUR_USERNAME/simon-says-game.git)
Navigate to the folder.

Open index.html in your browser.

👤 Author
Manav Merja

GitHub: @https://github.com/manavmerja

Created with ❤️ while learning JavaScript.