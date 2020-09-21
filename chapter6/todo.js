const todoList = ['wash the dishes', 'clean the sheets', 'conquer world with mad plan']
//you have X to do
//print first, second to last out like this --> todo: ....
console.log(`You have ${todoList.length} things to do`);
for(let x = 0; x < todoList.length; x++) {
console.log(`To do: ${todoList[x]}`);}

//delete third item
//add a new item to the end
//remove the first item

todoList.splice(2,1);
console.log(todoList);
todoList.push('walk the dog');
console.log(todoList);
todoList.shift();
console.log(todoList);

//1. index 0
//2. index 1 and so on

todoList.forEach(function(item, index) {
console.log(`${++index}. ${item}`)
})