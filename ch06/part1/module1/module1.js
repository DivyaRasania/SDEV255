console.log("module1 is loaded");
function add(a, b) {
  return a+b;
}
module.exports = { 
  add : add     // make the add() function accessible 
                // outside the module
}; 