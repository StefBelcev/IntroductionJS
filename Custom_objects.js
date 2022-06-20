//  Javascript uses functions as classes
    function makePerson(first, last){
        return {
            first: first,
            last: last
        };
    }
    function personFullName(person){
        return person.first + ' ' + person.last;
    }
    function personFullNameReverserd(person){
        return person.last + ', ' + person.first;
    }

    var s = makePerson("Simon", "Willson");
    console.log(personFullName(s)); // Simon Willson
    console.log(personFullNameReverserd(s)); // Willson Simon

// This works, but you will end up with dozens of functions
// in your global namespace.
// We need a way to attach a function to an object. Since functions are objects, this is easy
    function makePerson1(first, last){
        return {
          first: first,
          last: last,
          fullName: function(){
              return this.first + ' ' + this.last;
          },
          fullNameReserved: function(){
              return this.last + ', ' + this.first;
          }
        };
    }
    var s1 = makePerson1("Simon", "Willson");
    console.log(s1.fullName());
    console.log(s1.fullNameReserved());
//  Used inside a function, this refers to the current object
// If dot notations wasn't used for this call, this refers to the global object
    var fullName = s1.fullName();
    // console.log(fullName());
// When we call fullName() alone, without using s.fullName(), this is
// bound to the global object. Since there are no global variables called first
// or last we get undefined for each one.

//  We can take advantage of the this keyword to improve our makePerson function
    function Person(first, last){
        this.first = first;
        this.last = last;
        this.fullName = function(){
            return this.first + ' ' + this.last;
        }
        this.fullNameReversed = function(){
            return this.last + ', ' + this.first;
        };
    }
    var s3 = new Person("Simon", "Willson");

//  Every time we create a person object we are creating two brand new function objects within it
//  wouldn't it be better if this code was shared?
    function personFullName(){
        return this.first + ' ' + this.second;
    }
    function personFullNameReversed(){
        return this.second + ', ' + this.first;
    }
    function Person1(first, last){
        this.first = first;
        this.last = last;
        this.fullName = personFullName();
        this.fullNameReversed = personFullNameReversed();
    }
//  That’s better: we are creating the method functions only once, and assigning references to them
//  inside the constructor.

    function Person2(first, last){
        this.first = first;
        this.last = last;

    }
    Person2.prototype.fullName = function(){
        return this.first + ' ' + this.last;
    }
    Person2.prototype.fullNameReversed = function(){
        return this.last + ' ' + this.first;
    }
    Person2.prototype.firstNameCaps = function (){
        return this.first.toUpperCase();
    }
    Person2.prototype.firstNameReversed = function (){
        var reversed = '';
        for(let i = this.first.length - 1; i >= 0; i--){
            reversed += this.first.charAt(i);
        }
        return reversed;
    }
    var sp3 = new Person2("Simon", "Willson");
    console.log(sp3.fullName());
    console.log(sp3.fullNameReversed());
    console.log(sp3.firstNameCaps());
    console.log(sp3.firstNameReversed());

    var s = "Petar";
    String.prototype.reversed = function(){
        var r = '';
        for(let i = this.length - 1; i >= 0; i--){
            r += this.charAt(i);
        }
        return r;
    }
    console.log(s.reversed());
    console.log('This can now be reversed'.reversed());

//Person.prototype is an object shared by all instances of Person. It forms part of a lookup chain
// (that has a special name, “prototype chain”): // any time you attempt to access a property of Person
// that isn’t set, JavaScript will check Person.prototype to see if that property exists there instead.
// As a result, anything assigned to Person.prototype becomes available to all
// instances of that constructor via the this object.