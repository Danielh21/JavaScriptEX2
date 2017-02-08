/**
 * Created by daniel on 08-02-2017.
 */


/*EX-4 Template literals
 Execute this example And use template literals whenever it makes sense for all the following exercises.
 */


var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message);

/*
EX-5 - Rest Parameter and the spread operator
A) Implement the function f(..) below:
    function f(x,y,...rest){
    ...
    }
So this statement:
    console. log ( f( 5 , 2 , true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}));
Will produce this output (should obviously work for any number/type of arguments):
Sum: 7
rest value 1 is a: Boolean
rest value 2 is a: Number
rest value 3 is a: String
rest value 4 is a: Array
rest value 5 is a: Date
rest value 6 is a: Object
Hint: With es2015 you can get the class name using
*/


function f(x,y,bool,z,stringS,arrayNum,date, obj){
  return `
Sum: ${x + y}
rest value 1 is a: ${bool.constructor.name}
rest value 2 is a: ${z.constructor.name}
rest value 3 is a: ${stringS.constructor.name}
rest value 4 is a: ${arrayNum.constructor.name}
rest value 5 is a: ${date.constructor.name}
rest value 6 is a: ${obj.constructor.name}
`


}



console. log ( f( 5 , 2 , true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}));

var rest = [ true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}];
var restParams = [ ... rest];
console. log ( f( 5 , 2 ,... restParams));

var chars = [... f( 5 , 2 ,... restParams )];
console.log(chars);

// Will give me everything as an array of all the chars in the string f produces, which is 162.


