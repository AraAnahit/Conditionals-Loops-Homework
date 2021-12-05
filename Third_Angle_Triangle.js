let angle1 = prompt("First angle is...","");
if(angle1>180||angle1 <0){
  alert("Angle of triangle can't be more 180 or less 0!");
  angle1=prompt("Try again, first angle is...","");
} else {

}
let angle2 = prompt("Second angle is ...","");
if(angle2>180-angle1||angle2 <0){
  alert("Angle of triangle can't be more 180 or less 0!");
  angle2=prompt("Try again, second angle is...","");
} else {

}
const sum= 180
let angle3 = sum - angle1 - angle2
if (angle3==0) {
    alert("Third Angle of triangle equals 0, so it's a line");
} else {
    alert("Third angle is: "+angle3);
}
