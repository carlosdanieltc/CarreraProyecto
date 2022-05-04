
maxValue(2,1);

function maxValue(value1: number, value2: number)
 : number{
    return Math.max(value2, value2);
}

//Definicion de tipos

//Boolean

let isBoolean: Boolean= false;

//Number

let decimal: number = 43.343;
let age: number = 20;

//String 

let myName: string = "Carlos";

//Array

let listAges: number[] = [10,12,15,40];
let listNames: Array<string> = ["Juan","Pedro","Pepe"];

// Tuplas

let personTuple: [string, number];
personTuple = ["Samuel",30];

//

enum Color {Brown,Red,Green,Yellow,Purple};

//Any 
//No es recomendable usarlo ya que seria basicamente volver a js
let notSure: any= "345";
notSure= 24;
notSure= true;

// Void

function alertUser(): void {
    alert("Alert with function void");
}

//Null

let u:null = null;

//Undefined

let ud: undefined = undefined;

//Clases

class Animal{
    readonly name: string;
    private age: number;
    public skinColor: Color;
    constructor(name:string, age:number, skinColor: Color){
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }

    greet(): string {
        //return `Hello, ${name}`;
        return `Hello,`+this.name;
    }
}

let animal= new Animal("Canguro",30,Color.Green);
animal.skinColor = Color.Yellow;
alert(animal.greet());

//Herencia

class Dog extends Animal{
    greet(): string {
        //return `Woof! Woof ${name}`;
        return `Woof! Woof`+this.name;
    }
}

//Abstractas

abstract class Person{
    readonly name: string;
    constructor(name:string){
        this.name = name;
    }
}

//let personDeveloper = new Person("Carlos"); // Error ya que no se puede instanciar una clase abstracta

class Developer extends Person{

}

let personDeveloper = new Developer("Carlos");


// Condicionales

if (personDeveloper.name === "Carlos") {
    console.log("Developer found!");
}

switch (animal.skinColor){
    case Color.Yellow:
        console.log("Yellow!");
    break;
    default:
        console.log("Brown!");
        break;
}