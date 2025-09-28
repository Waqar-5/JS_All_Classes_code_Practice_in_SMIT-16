// Swap image
function swapPic() {
  var pic = document.getElementById("before"); 
  pic.src = "https://tse1.mm.bing.net/th/id/OIP.ijVymjCnrZbmv1cm0D8rAgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"; // swap with new picture
}

// Get link address
function getAddress() {
  var link = document.getElementById("link1");
  var address = link.href;
  alert("The link goes to: " + address);
}

// Change form class
function enlargeForm() {
  var frm = document.getElementById("f12");
  frm.className = "jumbo"; // apply jumbo CSS class
}
