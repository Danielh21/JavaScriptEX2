/**
 * Created by daniel on 08-02-2017.
 */

/*
 Complete the Generator function below (it's not yet a generator function, what is missing)
 function * makeNames() {
 let firstNames = [ "Lars" , "Jan" , "Ida" , "Tine" , "Thomas" ];
 let lastNames = [ "Mortensen" , "Peterson" , "Obama" , "Jensen" , "Hansen" ];

 So these statements
 let index = 0 ;
 for ( let name of makeNames()){
 console. log ( name);
 if ( index++ === 50 ){
 break ;
 }
 }
 Will produce 50 objects as sketched below:
 { firstName: 'Ida', lastName: 'Jensen' }
 { firstName: 'Tine', lastName: 'Jensen' }
 { firstName: 'Jan', lastName: 'Mortensen' }
 { firstName: 'Lars', lastName: 'Jensen' }
 { firstName: 'Lars', lastName: 'Peterson' }
 { firstName: 'Tine', lastName: 'Peterson' }
 { firstName: 'Ida', lastName: 'Peterson' }
 { firstName: 'Tine', lastName: 'Peterson' }
 { firstName: 'Jan', lastName: 'Obama' }
 { firstName: 'Ida', lastName: 'Obama' }
 */

function * makeNames() {
    let firstNames = ["Lars", "Jan", "Ida", "Tine", "Thomas"];
    let lastNames = ["Mortensen", "Peterson", "Obama", "Jensen", "Hansen"];

    while(true){
        let ran1 = Math.floor((Math.random() * 4) + 1);
        let ran2 = Math.floor((Math.random() * 4) + 1);
        let person = yield {fName: firstNames[ran1], lName: lastNames[ran2]};
    }

}


let index = 0 ;
for ( let name of makeNames()) {
    console.log(name);
    if (index++ === 50) {
        break;
    }
}
