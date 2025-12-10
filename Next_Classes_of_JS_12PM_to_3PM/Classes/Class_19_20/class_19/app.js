// console.log("document ==>", document.childNodes[1].childNodes[2].childNodes);

// var mainDiv = document.getElementById("mainDiv")
// console.log(("Paragraph ==>", mainDiv.childNodes[3].childNodes[0].nodeValue));

// if(mainDiv.childNodes[3] && mainDiv.childNodes[3].childNodes[0]){
//     console.log(mainDiv.childNodes[3].childNodes[0].nodeValue);
// } else {
//     console.log("Node not found!");
// }



var paragraph = document.getElementById("paragraph");

console.log("div ==>", paragraph.previousSibling.previousSibling.nodeName);


var li = document.getElementById("paragraph")

console.log("li ==>", li);

// if () {

// }

console.log("paragraph attributes ==>", document.getElementById("paragraph").getAttribute("class"));



function writeAttribute() {
  var paragraph = document.getElementById("paragraph");
  paragraph.setAttribute("class", "para1  para2 para3")
}