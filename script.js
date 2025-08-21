let name = prompt("enter your name ")
let age = prompt("enter your age ")

function cheackAge (age) {
  if (age >= 18 ) {
    return " You can drive ";
  } 
else if (age < 18 ){
    return "You're too young to drive ";
}
}

alert("hello "+ name + " , " + cheackAge(age));