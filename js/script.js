var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var upperDino = dinosaur.toUpperCase();
var replaceDino = text.replace('Velociraptor', upperDino);
var cutText = replaceDino.substr(0, 72);
var halfLengthText = text.length/2;
console.log(cutText, halfLengthText);


