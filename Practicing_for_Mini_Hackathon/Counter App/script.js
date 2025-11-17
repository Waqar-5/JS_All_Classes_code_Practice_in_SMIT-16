var decrementBtn = document.getElementById("decrease");
var incrementBtn = document.getElementById("increase");
var resetBtn = document.getElementById("reset");
var counterDisplay = document.getElementById("count");


var count = 0;
counterDisplay.innerText = count;
decrementBtn.addEventListener("click", function() {
    if(count > 0){
        count--;
        counterDisplay.innerText = count;
    }
});


incrementBtn.addEventListener("click", function() {
    count++;
    counterDisplay.innerText = count;
});

resetBtn.addEventListener("click", function() {
    count = 0;
    counterDisplay.innerText = count;
});