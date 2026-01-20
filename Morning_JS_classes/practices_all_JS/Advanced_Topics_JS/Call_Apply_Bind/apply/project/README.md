# Dynamic Team Scoreboard

## Project Overview

The **Dynamic Team Scoreboard** is a web-based application that allows users to dynamically add points to two teams (Team A and Team B). It supports different types of scoring such as normal points, bonus points, and penalties. The scoreboard updates in real-time and also calculates the total score across both teams.

---

## Features

* **Real-time Score Updates**: Automatically updates each team's score and the total score.
* **Multiple Score Types**:

  * **Normal**: Standard point addition.
  * **Bonus**: Adds double points.
  * **Penalty**: Subtracts points.
* **Dynamic Input**: Users can enter the number of points to add.
* **Interactive UI**: Clean, responsive, and user-friendly interface.
* **JavaScript `apply()` Usage**: Demonstrates advanced JavaScript concept for dynamically applying functions.

---

## Files

* `index.html` – Main HTML file containing the structure of the scoreboard.
* `style.css` – CSS file for styling the scoreboard and buttons.
* `script.js` – JavaScript file handling dynamic scoring and DOM updates.

---

## How It Works

1. Each team has a score initialized at 0.
2. User enters points and selects the type (normal, bonus, penalty).
3. When the "Add Points" button is clicked:

   * JavaScript captures the input values.
   * A temporary object is created to hold the team's score.
   * `scorePoints` function is called using **`apply()`** to update the team's score dynamically.
   * The UI updates the individual team scores and the total score.

---

## Key JavaScript Concepts Used

* **Objects**: Store team scores in an object for easy reference.
* **Functions**: `scorePoints` calculates points based on type.
* **apply()**: Used to dynamically apply the scoring function to team objects.
* **DOM Manipulation**: Updates the UI using `innerText`.
* **Event Handling**: Button click triggers the score addition.

---

## Example Usage

1. Enter `5` in Team A's points input and select `Bonus`.
2. Click `Add Points`.
3. Team A's score updates to `10` (5 * 2), and total score updates.

---

## Code Snippets

**scorePoints function:**

```javascript
function scorePoints(points, type) {
    switch(type) {
        case "normal":
            this.value += points;
            break;
        case "bonus":
            this.value += points * 2;
            break;
        case "penalty":
            this.value -= points;
            break;
    }
}
```

**Adding Points using apply():**

```javascript
function addPoints(team) {
    const points = Number(document.getElementById(`points${team}`).value);
    const type = document.getElementById(`type${team}`).value;

    const teamObj = { value: teamScores[team] };
    scorePoints.apply(teamObj, [points, type]);

    teamScores[team] = teamObj.value;
    document.getElementById(`score${team}`).innerText = teamScores[team];
    document.getElementById('totalScore').innerText = teamScores.A + teamScores.B;
}
```

---

## Technologies Used

* **HTML**: Structure of the scoreboard.
* **CSS**: Styling, responsive design, and hover effects.
* **JavaScript**: Dynamic functionality and `apply()` method demonstration.

---

## Future Enhancements

* Add more teams dynamically.
* Include reset button to reset scores.
* Add animations for score changes.
* Store scores in localStorage to persist between sessions.

---

## Author

* **Na
