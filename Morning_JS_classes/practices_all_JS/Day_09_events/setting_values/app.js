// Expands the paragraph text
function expandLoris(){
      var expandedParagraph = `Slow lorises are a group of several species of trepsirrhine primates which 
  make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of 
  distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises 
  have several adaptations that give them a pincer-like grip and enable them to grasp branches 
  for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.`;

  document.getElementById("slowLoris").innerHTML = expandedParagraph;
}



// Places a dynamic list into the div
function placeAList(){
    var listToPlace = `<ol>
    <li>Slow loris 🐒</li>
    <li>Fast loris ⚡</li>
    <li>Just-right loris 😎</li>
    </ol>`

    document.getElementById("lorisList").innerHTML = listToPlace;
}



// Reads the content inside paragraph and shows it in peekBox
function peekAtContent() {
    var whatsThere = document.getElementById("slowLoris").innerHTML;
    document.getElementById("peekBox").innerHTML = "<strong>Peeked Content:</strong><br>" + whatsThere;
}

// Resets the paragraph back to original state
function resetContent() {
  document.getElementById("slowLoris").innerHTML = 
    `Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.
    <a href="javascript:void(0);" onclick="expandLoris()"><em>Click for more.</em></a>`;
  
  document.getElementById("lorisList").innerHTML = "";
  document.getElementById("peekBox").innerHTML = "";
}
