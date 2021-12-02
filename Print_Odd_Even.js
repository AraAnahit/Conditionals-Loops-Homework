"use strict";

// to check if the number is odd or even we need to use remainder (%2).

let number = prompt('Odd or Even? Give me the number baby', '');
if (number % 2 == 0) {
    alert( 'Even' );
} else {
    alert( 'Odd' );
}