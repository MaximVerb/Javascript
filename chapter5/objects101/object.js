let myBook = {
title: '1984',
author: 'George Orwell',
pageCount: '326',
}

console.log(myBook);
console.log(myBook.author);
console.log(myBook['author']);
console.log(`the author is ${myBook.author}`);

//challenge
//model a person: name, age, location
//generate string like this : name is age and lives in location

let aPerson = {
name: 'Maxim',
age: 28,
location: 'Antwerp',}

console.log(`${aPerson.name} has the age of ${aPerson.age} and lives in ${aPerson.location}.`);
aPerson.age = ++aPerson.age;
console.log(`${aPerson.name} has the age of ${aPerson.age} and lives in ${aPerson.location}.`);