function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
 Person.prototype.nationality = "English";

  const myFather = new Person("John", "Doe", 50, "blue");

  console.log(Person.prototype);
  console.log(myFather)
  const myMother = new Person("Sally", "Rally", 48, "green");
  console.log(myMother)
  