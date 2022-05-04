"use strict";
maxValue(2, 1);
function maxValue(value1, value2) {
    return Math.max(value2, value2);
}
//Definicion de tipos
//Boolean
let isBoolean = false;
//Number
let decimal = 43.343;
let age = 20;
//String 
let myName = "Carlos";
//Array
let listAges = [10, 12, 15, 40];
let listNames = ["Juan", "Pedro", "Pepe"];
// Tuplas
let personTuple;
personTuple = ["Samuel", 30];
//
var Color;
(function (Color) {
    Color[Color["Brown"] = 0] = "Brown";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Yellow"] = 3] = "Yellow";
    Color[Color["Purple"] = 4] = "Purple";
})(Color || (Color = {}));
;
//Any 
//No es recomendable usarlo ya que seria basicamente volver a js
let notSure = "345";
notSure = 24;
notSure = true;
// Void
function alertUser() {
    alert("Alert with function void");
}
//Null
let u = null;
//Undefined
let ud = undefined;
//Clases
class Animal {
    constructor(name, age, skinColor) {
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }
    greet() {
        //return `Hello, ${name}`;
        return `Hello,` + this.name;
    }
}
let animal = new Animal("Canguro", 30, Color.Green);
animal.skinColor = Color.Yellow;
alert(animal.greet());
//Herencia
class Dog extends Animal {
    greet() {
        //return `Woof! Woof ${name}`;
        return `Woof! Woof` + this.name;
    }
}
//Abstractas
class Person {
    constructor(name) {
        this.name = name;
    }
}
//let personDeveloper = new Person("Carlos"); // Error ya que no se puede instanciar una clase abstracta
class Developer extends Person {
}
let personDeveloper = new Developer("Carlos");
// Condicionales
if (personDeveloper.name === "Carlos") {
    console.log("Developer found!");
}
switch (animal.skinColor) {
    case Color.Yellow:
        console.log("Yellow!");
        break;
    default:
        console.log("Brown!");
        break;
}
