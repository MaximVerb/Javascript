const notes= [{
title: 'a title',
body: 'a body',
author: 'an author',
},{
title: 'Moby dick',
body:'crazed seacaptain',
author:'Herman Melville',
},{
title: 'Puss in boots',
body: 'cat on catnip',
author: 'author on catnip',
}]

const filterNotes = notes.filter(function(note,index) {
const isTitleMatch = note.title.toLowerCase().includes('dick');
const isBodyMatch = note.body.toLowerCase().includes('crazed');
return (isBodyMatch || isTitleMatch);
})

const findNotes = function(notes,query) {
return notes.filter(function(note,index) {
const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
return (isBodyMatch || isTitleMatch);
})
}

console.log(filterNotes);
console.log(findNotes(notes,'puss'));