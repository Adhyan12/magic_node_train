function Car(comp, model, cost, col, typ ){
    this.company = comp,
    this.model = model,
    this.cost = cost
    this.color = col
    this.type = typ
};

function Person(firstname, lastname, age ){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
};

Person.prototype.name = function(){return this.firstname+' '+this.lastname} 
const father = new Person('bad', 'boy', 20)
//const mother = new Person('bad', 'girl', 22)
father.car = new Car('BMW','X1',25,'Black','SUV')

console.log(father.name()+' Badshah'+' aged '+father.age+' has a '+father.car.color+' '+father.car.company+' '+father.car.model)
//console.log(mother.name())