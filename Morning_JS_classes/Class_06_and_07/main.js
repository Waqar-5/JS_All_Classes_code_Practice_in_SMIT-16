console.log("JS is connected!");


// var a =0
// for(var i = 0; i >= 10; i++){
//     for(var  j = 11; j >= 100; 1++){
//         document.write("i = "+ i[i] + "j = " + j[j])
//     }
// }


// for (var i = 0; i <= 100; i += 10) {
//     for (var j = 10; j <= 100; j += 10) {
//         document.write("i = " + i + ", j = " + j + "<br>");
//     }
//     document.write("<hr>"); // horizontal line after each i loop
// }



// let arr = [];

// for (let i = 1; i <= 100; i++) {
//     arr.push(i);

//     // When we reach every 10th number, print the row and reset array
//     if (i % 10 === 0) {
//         document.write("[" + arr.join(", ") + "]<br>");
//         arr = [];  // reset for the next row
//     }
// }



for (var i = 1; i <= 100; i++) {
    document.write(i + " ");
    
    // After every 10 numbers, go to the next line
    if (i % 10 === 0) {
        document.write("<br>");
    }
}