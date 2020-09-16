let greetUser = function() {
console.log('Welcome user!')
};

greetUser();

let square = function(num) {
 let result = num * num;
 return result;
}

let result = square(3);

//Challenge
//convertFahrenheittoCelsius
//32 shoud get converted to 0
//68 should be converted to 20

let convertFahrenheittoCelsius = function(fahr) {
let value = fahr -32;
return Math.round(value/1.8); }

console.log(convertFahrenheittoCelsius(32));
console.log(convertFahrenheittoCelsius(68));