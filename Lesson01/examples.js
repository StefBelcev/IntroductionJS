//Original
//     var x = 5;


//ES2009 - ES5
//     function Person(){
//     this.name = "Stefan";
//     }
//ES2015 - ES6
//     class Person {
//         constructor(){
//             this.name = "Stefan";
//         }
//     }
//     let y = 10;
//     const z = 15;
//  array for iteration
//     for(let x of [0, 1, 2, 3]){
//         console.log(x);
//     }
//  object for iteration
//     for(let i in {x: 1, y: "ASDAS", z: [0, 1], b: true}){
//         console.log(i);
//     }
// Object literal syntax
    var obj = {
            name: 'Carrot',
            for: 'Max',
            details: {
                color: 'orange',
                size: 12
            }
    };
// console.log(obj.name);

    var x = {};
    x.name = "Stefan";
    x.last_name = "Belchev";
    x.age = 25;
    x.birth = "02.02.1997";
    x.license = [20, 5, 2022];
    console.log(x);
    x.toString();
// anonymous functions
//     var y = function(a){
//         console.log(a);
//     }
//     console.log(y);
//     console.log(y(45));
//     let z = y;
//     console.log(z);
//     console.log(y(45));
//     console.log(z.name);
// arrow function definition
    y = (x) => {console.log(x)};
    console.log(y(50));
    console.log(y.name);

// Closures
    function makeAdder(a){
        return function(b){
            return a+b;
        };
    }
    var add5 = makeAdder(5);
    var add20 = makeAdder(20);
    console.log(add5(6));
    console.log(add20(7));