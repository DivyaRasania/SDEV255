var mod1 = require("./module4");
console.log("mod1 =", mod1);
var total = mod1(2, 3);          // instead of mod1.add(2, 3)
console.log("mod1(2, 3) = ", total);
var total = mod1.mult(2, 3);
console.log("mod1.mult(2, 3) = ", total);