// Function to get browser info
document.getElementById("browser").innerText = navigator.userAgent;

// Screen info
document.getElementById("screen").innerText = `${screen.width}x${screen.height}`;

// Time auto update
setInterval(() => {
  document.getElementById("time").innerText = new Date().toLocaleTimeString();
}, 1000);

// Online/offline
function updateStatus() {
  document.getElementById("status").innerText = navigator.onLine ? "🟢 Online" : "🔴 Offline";
}
window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
updateStatus();

// Battery info
navigator.getBattery().then(battery => {
  function updateBattery() {
    document.getElementById("battery").innerText =
      `${Math.round(battery.level * 100)}% ${battery.charging ? "⚡ Charging" : ""}`;
  }
  updateBattery();
  battery.addEventListener("levelchange", updateBattery);
  battery.addEventListener("chargingchange", updateBattery);
});

// Detect tab visibility (user left or returned)
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    console.log("User switched tab 😢");
  } else {
    alert("Welcome back 👋! We missed you!");
  }
});

// Mood analyzer logic
function refreshMood() {
  const hours = new Date().getHours();
  let mood = "";

  if (!navigator.onLine) {
    mood = "You seem disconnected 😔. Take a walk or talk to someone!";
  } else if (hours < 6) {
    mood = "You’re up late 🌙 — Night owl mode activated!";
  } else if (hours < 12) {
    mood = "Fresh morning vibes ☀️ — great start!";
  } else if (hours < 18) {
    mood = "Midday hustle 💼 — keep up the energy!";
  } else {
    mood = "Evening chill mode 🌆 — time to relax!";
  }

  // Check battery
  navigator.getBattery().then(battery => {
    if (battery.level < 0.2 && !battery.charging) {
      mood += " ⚠️ Low battery — time to recharge!";
    }
    document.getElementById("moodText").innerText = mood;
  });
}

// Auto refresh every minute
setInterval(refreshMood, 60000);

// Initial call
refreshMood();

// Confirm before leaving
window.onbeforeunload = function () {
  return "Are you sure you want to exit Mood Mirror?";
};
