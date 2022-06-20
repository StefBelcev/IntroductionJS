// Javascript functions
    function add(x,y){
        var total = x + y;
        return total;
    }
// This is a simple function

// A JavaScript function can take 0 or more named parameters.
// The function body can contain as many statementsas you like and can declare its own variables which are local to that function.
// The return statement can be used to return a value at any time, terminating the function.
// If no return statement is used (or an empty return with no value), JavaScript returns undefined.
    console.log(add()); // Nan
    console.log(add(2, 3, 4)); // last argument is ignored, 5

// Functions have access to an additional variable inside their body called arguments
// which is an array-like object holding all of the values passed to the function.
    function add_rewrite(){
        var sum = 0;
        for (var i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
    }
    console.log(add_rewrite(2, 3, 4, 5)); //14

    function avg(){
        var sum = 0;
        for(const value of arguments){
            sum += value;
        }
        return sum/arguments.length;
    }
    console.log(avg(2, 3, 4, 5));

// The rest parameter operator is used in function parameter lists with the format: . . . variable and it will include
// within that variable the entire list of uncaptured arguments that the function was called with.
    function avg_rewrite(...args){
        var sum = 0;
        for(let value of args){
            sum += value;
        }
        return sum/args.length;
    }
    console.log(avg_rewrite(2, 3, 4, 5));
    function avgArray(arr){
        var sum = 0;
        for(let value of arr){
            sum += value;
        }
        return sum/arr.length;
    }
    console.log(avgArray([2, 3, 4, 5]));
    console.log("==========");

// Luckily, JavaScript lets you call a function with an arbitrary array
// of arguments, using the apply() method of any function object.
    console.log(avg.apply(null, [2, 3, 4, 5]));
    console.log(avg_rewrite.apply(null, [2, 3, 4, 5]));

//Javascript lets you create anonymous functions.
    var avg = function(){
      var sum = 0;
      for(var i = 0, j = arguments.length; i < j; i++){
          sum += arguments[i];
        }
      return sum/arguments.length;
    };
    const average = avg(2, 3, 4, 5);
    console.log(average);

//  Here's a way of "hidding" some local variables - like block spoce in C:
    var a = 1;
    var b = 2;

    (function(){
        var b = 3;
        a += b;
    })();

    console.log(a);
    console.log(b);

//  Javascript allows to call functions recursively
    function countChars(elm){
        if(elm.nodeType == 3){  //TEXT_NODE
            return elm.nodeValue.length;
        }
        var count = 0;
        for(var i = 0, child; child = elm.childNodes[i]; i++){
            count += countChars(child);
        }
        return count;
    }

//  How do you call anonymous functions recursively if they don't have a name?
//  JavaScript lets you name function expressions for this
//  IIFE's - Immediately Invoked Function Expressions
    var charsInBody = (function counter(elm){
        if(elm.nodeType == 3){ //TEXT_NODE
            return elm.nodeValue.length;
        }
        var count = 0;
        for(var i = 0, child; child = elm.childNode[i]; i++){
            count += counter(child);
        }
        return count;
    })(document.body);