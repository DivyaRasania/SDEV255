var mod1 = require("./module3");
console.log("mod1 =", mod1);
var total = mod1.add(2, 3);
console.log("mod1.add(2, 3) = ", total);      // 2 + 3 = 5
var total = mod1.mult(2, 3);
console.log("mod1.mult(2, 3) = ", total);     // 2 * 3 = 6