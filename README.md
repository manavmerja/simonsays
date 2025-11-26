# 🎮 Simon Says Game

> A classic memory puzzle game built using **HTML, CSS, and Vanilla JavaScript**. Now fully **Mobile Responsive**!

![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🌐 Live Demo
🚀 **[Play the Game Here](https://simonsays-liart.vercel.app/)**

*(Works on both Laptop & Mobile)*

---

## 📖 About The Project
This project is a digital version of the classic "Simon" electronic memory game. The game creates a series of flashing colors and requires the user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex.

It was built to master **DOM Manipulation**, **Event Handling (Key & Touch)**, and **Game Logic** in JavaScript.

---

## ✨ Key Features

-   **📱 Fully Responsive:** Optimized layout for Mobile and Desktop screens using CSS Media Queries.
-   **👆 Touch Support:** Added `touchstart` events so users can play on mobile devices without a keyboard.
-   **🧠 Dynamic Levels:** The game generates infinite random sequences, getting harder with every level.
-   **⚡ Visual Feedback:** Buttons flash white (game hint) and green (user click) for better interactivity.
-   **❌ Game Over Effect:** The screen flashes red to indicate a wrong move, displaying the final score.

---

## 🕹️ How to Play

1.  Open the **[Live Link](https://simonsays-liart.vercel.app/)**.
2.  **Desktop:** Press any key on your keyboard to start.
3.  **Mobile:** Tap anywhere on the screen to start.
4.  Watch the sequence of flashing colors.
5.  Repeat the sequence by clicking/tapping the colored buttons.
6.  Advance to the next level and beat your high score!

---

## 📸 Screenshots

| Desktop View | Mobile View |
|:---:|:---:|
| ![Desktop](screenshots/desktop.jpg) | ![Mobile](screenshots/mobile.png) |

*(Create a 'screenshots' folder and add images of your game on PC and Phone)*

---

## 🛠️ Tech Stack

-   **HTML5:** Semantic structure.
-   **CSS3:** Flexbox for layout & Media Queries for responsiveness.
-   **JavaScript (ES6):** Game state management, Array logic, and Event Listeners.

---

## 💻 Code Highlight (Mobile Logic)

Here is how I handled both Keyboard (Laptop) and Touch (Mobile) inputs to start the game:

```javascript
// Function to handle game start
function startGame() {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelup();
    }
}

// Event Listener for Desktop (Keyboard)
document.addEventListener("keypress", startGame);

// Event Listener for Mobile (Touch)
document.addEventListener("touchstart", startGame);
🚀 Installation (Run Locally)
Clone the repository:

Bash

git clone [https://github.com/YOUR_USERNAME/simon-says-game.git](https://github.com/YOUR_USERNAME/simon-says-game.git)
Open index.html in your browser.

👤 Author
Manav Merja

GitHub: @YOUR_USERNAME

Created with ❤️ and JavaScript.