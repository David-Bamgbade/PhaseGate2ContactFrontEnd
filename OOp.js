// Creating a javaScript object

let animal = {
    name : "unknown",
    color : "blue",
    sound : function (){
        return (`${this.name}made a sound`)
    }
}

// creating a prototype out of the object

let cat = Object.create(animal)
cat.name = "pussycat ";
cat.color = "red "

//console.log(cat)
//console.log(cat.sound());
// creating an instance of cat

// let blackCat = Object.create(cat);
// blackCat.name = "blackCat"
// blackCat.color = "pink";
// console.log(blackCat);

let dog = {};
Object.setPrototypeOf(dog, animal);
dog.name = "Bulldog";
//console.log(dog)

Object.getPrototypeOf(animal);

let tiger = {
    _proto_ : animal
};
tiger._proto_ = animal;
tiger.name = "African Tiger";
console.log(tiger);

//javaScript constructor
function Person(name, age){
this.name = name;
this.age = age;

this.describe =  function (){
    console.log(`My name is ${this.name} and i am ${this.age} years`)
}
}

const chinedu = new Person("Ugbo", "sweet-16");
Person.prototype.species = "Human";
console.log(chinedu.species);

// creating object with class
class Animal{
    constructor(type, color){
        this.name = this.name;
        this.color = color;
    };

getName(){
    return this.name;
}

setName(params){
    this.name = params
}
}

//Inheritance, super keyword is to inherit the constructor from the parent class 
//When your aurgument is more than 3 create a class
// theres no how you access a file in another file is to export and import it into the file

class Goat extends Animal{
    constructor(name, color, type, sound){
        super(name, colour);
        this.type = type
        this.sound = sound;
    }

}