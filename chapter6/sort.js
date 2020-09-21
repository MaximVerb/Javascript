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

const sortNotes = function(notes) {
notes.sort(function(a, b) {
if(a.title.toLowerCase() < b.title.toLowerCase()) {
return -1 ; //a comes first
}
else if (b.title.toLowerCase()<a.title.toLowerCase()){
return 1;
}
else {return 0; }})
}

sortNotes(notes);
console.log(notes);