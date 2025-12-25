// 1️⃣ Basic iteration (foundation)
const scores = [80, 45, 90, 60];
let passCount = 0;

scores.forEach(score => {
  // condition check
  if (score >= 50) {
    passCount++; // side effect: update external variable
  }
});
