var a = require('./inspection-line.js');

console.log('Hello I am a car inspection system !');

var inspectionLine1 = a.inspectionLine({'id' : '1'});

console.log(inspectionLine1.getId());
console.log(inspectionLine1.occupied);
