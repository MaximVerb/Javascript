//undefined for variable
let name;

name='Jen';

if(name === undefined) {
console.log('please provide a name')
} else {
console.log(name);
}

//undefined for function arguments
let square = function(num)
{console.log(num); }

let result = square();
console.log(result);

//set variable to undefined

let age = 27;
age = null;

console.log(age);