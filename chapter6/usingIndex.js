const notes= [{
title: 'a title',
body: 'a body',
author: 'an author',
},
{
title: 'Moby dick',
body:'crazed seacaptain',
author:'Herman Melville',
},
{
title: 'Puss in boots',
body: 'cat on catnip',
author: 'author on catnip',
}]

notes.forEach(function(item) {
console.log(item);
})

const index = notes.findIndex(function(note,index) {
console.log(note);
return note.title==='Puss in boots'})

console.log(index);

//another way

const findNote = function(item, itemProperty) {
const index = notes.findIndex(function(notes,index) {
 return notes.title === itemProperty;})
 return notes[index];
}

const item = findNote(notes, 'Herman Melville');
console.log(item);
