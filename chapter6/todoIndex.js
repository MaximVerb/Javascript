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

//1.create a function that removes a todo by text value

const deleteTodo = function(arr, arrObject) {
const index = anArr.findIndex(function(anArr,index) {
return anArr.task === arrObject;})
arr.splice(index,1);
}

const item = deleteTodo(anArr,'do dishes');
console.log(anArr);

//filtering todo list
const filterArr = function(anArr) {
return anArr.filter(function(task, index) {
return task.completed === false; })}

console.log(filterArr(anArr))