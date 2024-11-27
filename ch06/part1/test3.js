var mod1 = require("module1");
console.log("mod1 =", mod1);
var total = mod1.add(2, 3);      // call of the add() function 
                                 // defined in module1
console.log("mod1.add(2, 3) = ", total);  // displays 5