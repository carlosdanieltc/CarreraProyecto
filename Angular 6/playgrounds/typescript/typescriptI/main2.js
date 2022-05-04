"use strict";
// Iterators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let listNumber = [10, 27, 41];
for (let number of listNumber) { //Muestra la lista
    console.log(number); // 10,27,41
}
for (let number in listNumber) { //Muestra los indices
    console.log(number); // 0,1,2 
}
for (let i = 0; i < listNumber.length; i++) {
    console.log(i); // 0,1,2 
    console.log(listNumber[i]); // 10,27,41
}
// Metodos y clases Genericos
class CustomColletion {
    constructor() {
        this.itemArray = [];
    }
    Add(item) {
        this.itemArray.push(item);
    }
}
class PersonInfo {
    constructor(name) {
        this.name = name;
    }
}
let listName = new CustomColletion();
listName.Add("Carlos");
let listAge = new CustomColletion();
listAge.Add(23);
let listPersonInfo = new CustomColletion(); //Podemos ver que por ser de tipo generico acepta cualquier cosa, en este caso de tipo PersonInfo
listPersonInfo.Add(new PersonInfo("Kaka"));
function WriteMessage(message) {
    console.log(message.title);
}
// Modules y namespace
//Con export se pone a disposicion el modulo para ser utilizado por otros modulos
//namespace : nombre comun que le podemos poner a la clase
var Validator;
(function (Validator) {
    class ZipCodeValidator {
        isValidNumber(value) {
            return value > 0 && 10 < value;
        }
    }
    Validator.ZipCodeValidator = ZipCodeValidator;
})(Validator || (Validator = {}));
//Decoradores
// Son funciones que modifican una clase o un metodo
function Logged() {
    return function (target) {
        console.log("Logged!");
    };
}
let TestDecorator = class TestDecorator {
    method() {
        return true;
    }
};
TestDecorator = __decorate([
    Logged()
], TestDecorator);
