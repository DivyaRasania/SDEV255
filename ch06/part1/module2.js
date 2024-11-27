console.log("module1 is loaded");
function add(a, b) {
  return a+b;
}
function mult(a, b) {
  return a*b;
}
module.exports = {
  add : add,
  mult : mult
}