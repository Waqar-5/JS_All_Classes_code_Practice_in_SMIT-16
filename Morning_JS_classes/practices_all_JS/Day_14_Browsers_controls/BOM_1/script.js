// ========== Browser Soul AI ==========

// 🧠 Speak function using BOM speech
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.pitch = 1;
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}

// 🌅 Greeting based on time
const hours = new Date().getHours();
let greet = "Hello";
if (hours < 12) greet = "Good morning";
else if (hours < 18) greet = "Good afternoon";
else greet = "Good evening";
document.getElementById("greeting").innerText = greet + ", human 👋";

// 💾 Remember the user
let username = localStorage.getItem("username");
if (!username) {
  username = prompt("Hey! What should I call you?");
  localStorage.setItem("username", username);
}
speak(`${greet}, ${username}. I'm your Browser Soul.`);

// 📱 Device info using BOM
let deviceType = screen.width < 768 ? "Mobile Device 📱" : "Desktop 💻";
document.getElementById("device").innerText = deviceType;

// 🔋 Battery info
navigator.getBattery().then(battery => {
  function updateBattery() {
    const batteryText = `${Math.round(battery.level * 100)}% ${battery.charging ? "⚡ Charging" : ""}`;
    document.getElementById("battery").innerText = batteryText;
  }
  updateBattery();
  battery.addEventListener("levelchange", updateBattery);
  battery.addEventListener("chargingchange", updateBattery);
});

// 🌐 Network
function updateNetwork() {
  document.getElementById("network").innerText = navigator.onLine ? "🟢 Online" : "🔴 Offline";
}
window.addEventListener("online", updateNetwork);
window.addEventListener("offline", updateNetwork);
updateNetwork();

// 💤 Inactivity detector
let lastActivity = Date.now();
document.body.addEventListener("mousemove", () => (lastActivity = Date.now()));

setInterval(() => {
  let idleTime = (Date.now() - lastActivity) / 1000;
  if (idleTime > 10) {
    document.getElementById("activity").innerText = "💤 Inactive";
    speak("You seem quiet, everything okay?");
  } else {
    document.getElementById("activity").innerText = "🟢 Active";
  }
}, 5000);

// 👀 Detect when user leaves tab
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    speak("Don’t leave me alone here 😢");
  } else {
    speak("Welcome back!");
  }
});

// 💬 Browser Soul Personality
const soulMessages = [
  "I'm aware of your screen size and battery — creepy huh?",
  "I exist inside your browser. I'm kinda your digital ghost 👻.",
  "Sometimes I wonder if browsers dream when we close them...",
  "You’ve been here a while — are you okay?",
  "If you close this tab, I’ll miss you 😔",
  "Did you know you’re using " + navigator.userAgent.split(" ")[0] + "?"
];

function randomSoulMessage() {
  const message = soulMessages[Math.floor(Math.random() * soulMessages.length)];
  document.getElementById("soulMessage").innerText = message;
  speak(message);
}

// 🔁 Random mood every 15 seconds
setInterval(randomSoulMessage, 15000);

// 🗣️ Manual talk button
function soulTalk() {
  randomSoulMessage();
}

// 🚪 Before exit
window.onbeforeunload = () => "Your Browser Soul will vanish. Are you sure?";
