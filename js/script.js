var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var upperDino = dinosaur.toUpperCase();
var replaceDino = text.replace('Velociraptor', upperDino);
var lengthHalf = text.length/2;
var cutText = replaceDino.slice(0, lengthHalf);
console.log(cutText);


