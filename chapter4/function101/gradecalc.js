//two arguments : student score, total possible score
//example: 15/20 equals C(75%)
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function(score, total) {
let x = (score/total)*100;
let char = ''; 
switch(x) {
case (x>=89):
let char = 'A';
break;
case (x>=80):
let char = 'B';
break;
case (x>=70):
let char = 'C';
break;
case (x>=60):
let char = 'D';
break;
case (x>=0):
let char = 'F';
break;
}
return `Het cijfer dat je behaald hebt is gelijk aan ${char}.Het percentage dat je behaald hebt is (${x}%)`;
}

let result = gradeCalc(10,20);
console.log(result);
