// Numeric operators are +, -, *, / and %(same as module)
// Thera are also compound assigment statements such as
// +=, -=, *=, /=
var x = 0;
x += 5; // x = 0 + 5
x = x + 5; // x = 5 + 5
console.log(x);

// ++ and -- to increment and decrement
var y = 1;
y++;
y--;
console.log(y);

// + operator also does string concatenation
console.log('3' + 4 + 5); // "345"
console.log(3 + 4 + '5'); // "75"
// Adding an empty string to something is a useful way of converting it to a string itself.
console.log("" + 345);
// Comparisons in JavaScript can be made using <, >, <= and >=. These work for both strings and numbers.
console.log(123 == "123"); // true
console.log(1 == true); // true
//To avoid type coercion, use the triple-equals operator:
console.log(123 === "123"); // false
console.log(1 === true); // false
//There are also != and !== operators.