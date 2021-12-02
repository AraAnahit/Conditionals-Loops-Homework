"use strict"
let angle1=prompt("First angle?","");
let angle2=prompt("Second angle?","");
console.log(180-angle1-angle2);


let angle1 = prompt("First angle is...","");
if(angle1>180||angle1 <0){
  alert("Angle of triangle can't be more 180 or less 0!");
  let angle1=prompt("Try again, first angle is...","");
} else {
let angle2 = prompt("Second angle is ...","");
}
let angle3 = 180 - angle1 - angle2
if (angle3=0) {
    console.log("Third Angle of triangle equals 0, so it's a line");
} else {
    console.log(angle3);
}
