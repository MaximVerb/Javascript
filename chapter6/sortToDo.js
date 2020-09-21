const anArr = [{
task: 'do laundry',
completed: false,
},
{
task: 'do dishes',
completed:true,
},
{
task:'go out',
completed:false,
}]

const sortToDos = function(arr) {
arr.sort(function(a,b) {
if(a.completed < b.completed){
return -1}
else if(b.completed < a.completed) {
return 1}
else {return 0;}})
}

sortToDos(anArr);
console.log(anArr);