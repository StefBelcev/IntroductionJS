// Math built-in arithmetical function for advanced calculations
console.log(3/2); // 1.5
console.log(Math.floor(3/2)); // 1
// Parse-Int built-in function for converting string into number
console.log(parseInt('123', 10)); // 123
console.log(parseInt('010', 10)); // 10
console.log(parseInt('010')); // 10
console.log(parseInt('0x10')); // 16
// You can also use the unary + operator to convert values to numbers:
console.log(+ '123'); // 123
// When you want to parse non-numerical string, NaN is special value NaN = 'Not a Number'
console.log(parseInt('hello', 10)); // NaN
console.log(NaN + 5); // NaN
console.log(isNaN(NaN)); // true
// Special values Infinity and -Infinity
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(isFinite(1 / 0)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN)); // false
