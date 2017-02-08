// A)
// For this exercise you should refer to this slide ( http://js-plaul.rhcloud.com/javascript1/js.html#19 ) as a reference to
// ES5 this-pitfalls.
//     Use the Constructor function in the example belo w, to explain about the ES5 this-behaviour. Execute the
// example, and solve the problem, first using ES5 features, and then using an es2015 arrow function.


function Numbers(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach ( function (v) {
        if (v % 5 === 0 ) {
            this.fives.push (v);
        }
    }.bind(this)
    );
}
var numbers = new Numbers([ 1 , 3 , 5 , 10 , 14 , 20 , 33 , 50 ]);
console. log ( numbers.fives );

// With Arrow Function:

function NumbersARR(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(val => {
        if(val % 5 === 0){
            this.fives.push(val)
        }}
    )};

// No need to bind since, with an Arrow function you don't change scope, while a new function gets its own scope and
// also it's own 'this'


var numbers2 = new NumbersARR([ 1 , 3 , 5 , 10 , 14 , 20 , 33 , 50 ]);
console. log ( numbers2.fives );


/*B) Arrow functions and this or when not to use arrow functions
This example (taken from the slide referred to above), shows how we "loose" this, when extracting a
method from an object.
var counter = {
    count : 0 ,
    inc : function () {
        this . count ++;
    }
}
var func = counter. inc ; //Store "reference" to inc
func();
console. log ( counter. count ); //Still zero
counter. inc ();
console. log ( counter. count ); //Now one
Rewrite the inc() function to use the arrow notation, and test whether this; solves the problem, makes
it worse or leaves it unchanged.
*/

var counter = {
    count : 0 ,
    inc : () =>this.count++
}
var func = counter. inc ; //Store "reference" to inc
func();
console.log ( counter.count ); //Still zero
counter.inc();
console.log( counter.count ); //Now one

// Seams to leave it unchanged if this is the purpose of the exercise?




