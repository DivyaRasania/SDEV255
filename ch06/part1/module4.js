console.log("module1 is loaded");
function add(a, b) {
  return a+b;
}
function mult(a, b) {
  return a*b;
}
// first define the main function
module.exports = add;  // the add() function defined outside 
                       // the module, is made main
// then define the secondary functions
module.exports.mult = mult;   // and the mult() function 
                              // becomes usable as well