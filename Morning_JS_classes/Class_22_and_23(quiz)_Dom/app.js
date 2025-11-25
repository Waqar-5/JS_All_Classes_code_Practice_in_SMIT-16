// var element = document.getElementById("para1")


// console.log(element.innerHTML);


// var paras = document.getElementsByTagName("p")

// console.log(paras[0].innerText);
// console.log(paras[1].innerText);
// // console.log(paras[2].innerText);
// // console.log(paras[3].innerText);
// // console.log(paras[4].innerText);



// create element and add in html
// createElement("elementName")
var newPara = document.createElement("p")

newPara.innerText = "I am a new Paragraph!"

// appendChild(varName)
document.getElementById("myDiv").appendChild(newPara)



var element = document.getElementById("deleteMe");

element.remove()

var heading = document.getElementById("heading")
heading.innerText = "New Heading!"




  // var p1 = document.getElementById("p1");
  // console.log(p1.parentNode);

// var p1 = document.getElementById("p1");
// 
// console.log(p1.parentNode);

// console.log(p1.nextSibling);
// console.log(p1.nextElementSibling);


// var list = document.getElementById("list");

// console.log(list.childNodes.length);// should be 2 but returns 5;

// console.log(list.children.length); // 2


// var wrap = document.getElementById("wrap");

// console.log(wrap.firstChild);
// console.log(wrap.firstElementChild);

var p = document.getElementById("p");

console.log(p.childNodes);


var em = p.querySelector("em");

console.log(em.firstChild.nodeValue);