let num = 103.94;

console.log(num.toFixed(2)); // toont x aantal cijfers na de komma

console.log(Math.round(num)); //afronden
console.log(Math.floor(num));// naar beneden afronden
console.log(Math.ceil(num)); // naar boven afronden

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //de manier om een random getal te creëeren
                                                                    //tussen 10 en 20
console.log(randomNum);

//challenge
//input guess
//game guess is true or false
let makeGuess = function(num) {
let min = 0;
let max = 10;
let aRandom = Math.floor(Math.random() * (max + 1));
console.log(aRandom);
if(num === aRandom) { console.log(`You guessed ${num} and this is correct`);}
else if (!(num === aRandom)){ console.log(`You guessed ${num} and this is incorrect`);}
}

console.log(makeGuess(5))