var a = 12;
if (true) {
    // always executed (because always true)
    var b = 56;
    let c = 89;
    console.log("In the brace:");
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
}
console.log("After the brace:");
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);