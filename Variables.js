// New variables in JavaScript are declared using one of three keywords:
// 1. let,
// 2. const, or
// 3. var
// let allows you to declare block-level variables.
// The declared variable is available from the block it is enclosed in.
let a;
let name = "Simon";
// myLetVariable is *not* visible out here
for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
// myLetVariable is only visible in here
    a = myLetVariable + 1;
    console.log(`${a}. ` + `${name}`);
}
console.log(myLetVariable);
// myLetVariable is *not* visible out here

// const allows you to declare variables whose values are never intended to change.
// The declared variable is available from the block it is declared in.
const Pi = 3.14; // variable Pi is set

// Var is the most common declarative keyword.
// It does not have the restrictions that the other two keywords have.
// The declared varialbe is available from the function it is declared in.
var a;
var name = 'Simon';
// myVarVariable *is* visible out here
for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
// myVarVariable is visible to the whole function
    a = myVarVariable + 1;
    console.log(`${a}. ` + `${name}`);
}
console.log(myVarVariable);
// myVarVariable *is* visible out here
