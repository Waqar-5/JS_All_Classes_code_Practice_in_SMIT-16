var display = document.getElementById("display");

function append(value){
    display.value += value
}

function clearDisplay(){
    display.value = ""
}

function delChar(){
    display.value = display.value.slice(0, -1)
}


function calculate(){
     display.value = eval(display.value)

  var exp = display.value;
  var opt = "+-*/%";
  var error = false;

  for(var i = 0; i < exp.length -1 ; i++){

    var current = exp[i];
    var next = exp[i + 1]


    if(opt.indexOf(current) !== -1 && opt.indexOf(next) !== -1){

      error = true;
      break
    }
  }

  if(error){
    display.value = "Error";
  }else{
    display.value = eval(exp)
  }


//   var exp = display.value;
//   var opt = "+-/*%";
//   var error = false


//   for(var i = 0; i < exp.length - 1; i++){
//     var current = exp[i]
//     var next = exp[i +1]

//     if(opt.indexOf(current) !== -1 && opt.indexOf(next) !== -1){

//         error = true;
//         break;
//     }
//   }

//   if(error){
//     display.value = "Error";

//   } else{
//     display.value = eval(exp)
//   }


}