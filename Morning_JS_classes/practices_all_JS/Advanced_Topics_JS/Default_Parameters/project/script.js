// Array of motivational quotes for default random selection
const quotes = [ // declare constant array named quotes
  "Believe in yourself!", // quote 1
  "Keep pushing forward!", // quote 2
  "Stay positive, work hard!", // quote 3
  "Every day is a new opportunity!", // quote 4
  "Success starts with self-discipline!" // quote 5
];

// Function to get default greeting based on current hour
function defaultGreeting(hour = new Date().getHours()) { // function defaultGreeting, hour defaults to current hour
  if(hour < 12) return "Morning"; // if hour less than 12, return Morning
  if(hour < 18) return "Afternoon"; // if hour less than 18, return Afternoon
  return "Evening"; // otherwise, return Evening
}

// Function to get random quote from array
function getRandomQuote(list = quotes) { // function getRandomQuote, list defaults to quotes array
  const index = Math.floor(Math.random() * list.length); // compute random index within array length
  return list[index]; // return quote at random index
}

// Main function to show greeting on UI
function showGreeting(
  name = "Guest", // parameter name defaults to "Guest"
  greetingType = defaultGreeting(), // greetingType defaults to value from defaultGreeting()
  message = "Welcome to the Dashboard!", // message defaults to fixed string
  quote = getRandomQuote() // quote defaults to random quote
) {
  const greetingText = `Good ${greetingType}, ${name}! ${message}`; // combine all parameters into greetingText
  document.getElementById("greetingDisplay").textContent = greetingText; // display greetingText in HTML element
  document.getElementById("quoteDisplay").textContent = quote; // display quote in HTML element
}

// Event listener for button click
document.getElementById("greetBtn").addEventListener("click", () => { // attach click event to button
  const name = document.getElementById("name").value || undefined; // get name input, if empty set undefined
  const greetingType = document.getElementById("greetingType").value || undefined; // get selected greeting type
  const message = document.getElementById("customMessage").value || undefined; // get custom message input

  showGreeting(name, greetingType, message); // call showGreeting with parameters, defaults used if undefined
});
