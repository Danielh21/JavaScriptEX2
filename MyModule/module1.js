/**
 * Created by daniel on 08-02-2017.
 */

// For EX 8:



// export function f(x,y,bool,z,stringS,arrayNum,date, obj){
//     return `
// Sum: ${x + y}
// rest value 1 is a: ${bool.constructor.name}
// rest value 2 is a: ${z.constructor.name}
// rest value 3 is a: ${stringS.constructor.name}
// rest value 4 is a: ${arrayNum.constructor.name}
// rest value 5 is a: ${date.constructor.name}
// rest value 6 is a: ${obj.constructor.name}
// `
// };


module.exports.func = function(x,y,bool,z,stringS,arrayNum,date, obj){
    return `
Sum: ${x + y}
rest value 1 is a: ${bool.constructor.name}
rest value 2 is a: ${z.constructor.name}
rest value 3 is a: ${stringS.constructor.name}
rest value 4 is a: ${arrayNum.constructor.name}
rest value 5 is a: ${date.constructor.name}
rest value 6 is a: ${obj.constructor.name}
`
};
