// ============================
// Team Score Objects
// ============================
const teamScores = {
    A: 0,
    B: 0
};

// ============================
// Scoring functions
// ============================

// Function to calculate points based on type
function scorePoints(points, type) {
    // 'this' refers to the team (teamScores object)
    switch(type) {
        case "normal":
            this.value += points; // normal addition
            break;
        case "bonus":
            this.value += points * 2; // double points
            break;
        case "penalty":
            this.value -= points; // subtract points
            break;
    }
}

// ============================
// Add points dynamically using apply()
// ============================
function addPoints(team) {
    // Get input values
    const points = Number(document.getElementById(`points${team}`).value);
    const type = document.getElementById(`type${team}`).value;

    // Prepare object with 'value' as reference to team score
    const teamObj = { value: teamScores[team] };

    // Apply the scorePoints function dynamically
    scorePoints.apply(teamObj, [points, type]);

    // Update the original team score
    teamScores[team] = teamObj.value;

    // Update UI
    document.getElementById(`score${team}`).innerText = teamScores[team];
    document.getElementById('totalScore').innerText = teamScores.A + teamScores.B;
}
