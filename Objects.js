// JavaScript objects can be thought of as simple collections of name-value pairs.
// The “name” part is a JavaScript string, while the value can be any JavaScript value — including more objects.
// This allows you to build data structures of arbitrary complexity.
//There are two basic ways to create an empty object:
//     var obj = new Object();
//or
    var obj1 = {};
// The second is called object literal syntax and is more convenient.
// This syntax is also the core of JSON format and should be preferred at all times.
    var obj = {
        name: "Carrot",
        _for: "Max", // ’for’ is a reserved word, use ’_for’ instead.
        details: {
            color: "orange",
            size: 12
        }
    };
    console.log(obj);
// Attribute access can be chained together:
    var name = obj
    console.log(obj.name); // Carrot
    console.log(obj._for); // Max
    console.log(obj.details.color); // orange
    console.log(obj["details"]["size"]); // 13

// The following example creates an object prototype(Person) and an instance of that prototype(you).
    function Person(name, age) {
    this.name = name;
    this.age = age;
    }
// Define an object
var you = new Person("You", 24);
// We are creating a new person named "You" aged 24.

// Once created, an object’s properties can again be accessed in one of two ways:
// dot notation
    you.name = "YOU";
    var name = you.name;
    console.log(name);
// bracket notation
    obj["name"] = "Simon";
    var name = obj["name"];
// can use a variable to define a key

// var user = prompt(’what is your key?’)
// obj[user] = prompt(’what is its value?’)
