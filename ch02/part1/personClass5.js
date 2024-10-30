class Person {
  // class properties
  lastname = "";
  firstname = "";
  age = 0; // class methods
  display() {
    console.log(
      " The person's lastname = " +
        this.lastname +
        ", firstname = " +
        this.firstname
    );
  }
}
var p = new Person();
p.lastname = "Rasania"; // initialization of the lastname // property of the object p
p.firstname = "Divya"; // initialization of the firstname // property of the object p
console.log("Variable p = ", p);
p.display();
