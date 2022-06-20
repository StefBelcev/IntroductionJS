//Javascript defining arrays:
    var a = new Array();
    a[0] = "dog";
    a[1] = "cat";
    a[2] = "hen";
    a.length; // 3

// A more convenient notation is to use an array literal:
    var a = ["dog", "cat", "hen"];
    a.length; // 3

// Note that array.length isn’t necessarily the number of items in the
// array. Consider the following:
    var a = ["dog", "cat", "hen"];
    // a[100] = "fox";
    // a.length; // 101

// If you take the above about [] and length into account, you can iterate
// over an array using the following for loop:
for (var i = 0; i < a.length; i++) {
// Do something with a[i]
}
// ES2015 introduced the more concise for. . . =of= loop for iterable objects
// such as arrays:
//
for (const currentValue of a) {
// Do something with currentValue
}

// Another way of iterating over an array that was added with ECMAScriptis forEach():
    ["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
        console.log(currentValue);
});
// Insert element as last element in the array using push
a.push("rabbit");
// Reverse the array
a.reverse();
// Convert array into string
console.log(a.toString());
// Convert array into string given any delimiter , . ; and so on
const aJoinedString = a.join(", ");
console.log(aJoinedString);
// Give the index of an element
console.log(a.indexOf("rabbit"));
// Return true/false if it is/isn't in
console.log(a.includes("rabbit"));
console.log(a);
// Removes and returns the last element
console.log(a.pop());
// Removes and returns the first element
console.log(a.shift());
console.log(a.slice(0,1));
console.log((a.indexOf("rabbit") !== -1));
console.log(a);