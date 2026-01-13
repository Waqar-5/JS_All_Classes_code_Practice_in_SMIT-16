// =====================
// Substring Search (Case-Sensitive)
// =====================
function searchSubstring() {
  const str = document.getElementById("mainString").value;
  const search = document.getElementById("searchInput").value;

  if (!str || !search) {
    document.getElementById("searchResult").innerText = "Please enter both string and substring";
    return;
  }

  const found = str.includes(search); // true/false
  document.getElementById("searchResult").innerText = found
    ? `"${search}" exists in the string!`
    : `"${search}" not found in the string.`;
}


// =====================
// Substring Search (Case-Insensitive)
// =====================
function searchSubstringCaseInsensitive() {
  const str = document.getElementById("mainString").value.toLowerCase();
  const search = document.getElementById("searchInput").value.toLowerCase();

  if (!str || !search) {
    document.getElementById("searchResult").innerText = "Please enter both string and substring";
    return;
  }

  const found = str.includes(search);
  document.getElementById("searchResult").innerText = found
    ? `"${search}" exists in the string! (Case-Insensitive)`
    : `"${search}" not found in the string.`;
}


// =====================
// Reverse String
// =====================
function reverseString() {
  const str = document.getElementById("mainString").value;
  const reversed = str.split("").reverse().join("");
  document.getElementById("transformResult").innerText = reversed;
}


// =====================
// Uppercase String
// =====================
function uppercaseString() {
  const str = document.getElementById("mainString").value;
  document.getElementById("transformResult").innerText = str.toUpperCase();
}


// =====================
// Lowercase String
// =====================
function lowercaseString() {
  const str = document.getElementById("mainString").value;
  document.getElementById("transformResult").innerText = str.toLowerCase();
}


// =====================
// Count Substring Occurrences
// =====================
function countSubstring() {
  const str = document.getElementById("mainString").value;
  const search = document.getElementById("countInput").value;

  if (!str || !search) {
    document.getElementById("countResult").innerText = "Please enter both string and substring";
    return;
  }

  let count = 0;
  let pos = 0;

  while (true) {
    const foundPos = str.indexOf(search, pos);
    if (foundPos === -1) break;
    count++;
    pos = foundPos + search.length;
  }

  document.getElementById("countResult").innerText = `Substring "${search}" occurs ${count} time(s)`;
}
