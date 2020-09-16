//mutliple arguments
let add = function(a,b,c) {
return a + b + c;
}

let result = add(10,1,2);
console.log(result);

//default arguments
let getScoreText = function(name = 'defaultname',score = 0) {
return 'Name: ' + name + ' Score: ' + score
}

let scoretext = getScoreText(undefined, 99);
console.log(scoretext);

//Challenge
//total, tip percent(as a decimal)

let getTip = function (total, percentage = 0.02)
{ let extra = (total*percentage);
 return Math.round(extra + total); }

let tip1 = getTip(100,0.03);
console.log(tip1);

let tip2 = getTip(100);
console.log(tip2);

