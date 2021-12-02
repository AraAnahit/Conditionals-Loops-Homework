"use strict";

// It's an example, which we have to change to while and do-while loop.
let a=[1, 2, 3, 4,]
for (let i = 0; i < a.length; i++) {
console.log("for", i, a[i]);
}

//While loop, changed a -> x and i -> y
let x=[1, 2, 3, 4,]
let y=0
while (y<x.length){
console.log ("for", y, x[y]);
y++;
}

// Do-While loop, also changed variables to c and u.
let c=[1, 2, 3, 4,];
let u=0;
do { 
  console.log("for", u, c[u]);
  u++;
} while(u<c.length)