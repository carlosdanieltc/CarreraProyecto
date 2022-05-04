
// Iterators

let listNumber: Array<number> = [10,27,41];

for (let number of listNumber) {//Muestra la lista
    console.log(number) // 10,27,41
}

for(let number in listNumber){//Muestra los indices
    console.log(number) // 0,1,2 
}

for (let i = 0; i < listNumber.length; i++) {
    console.log(i) // 0,1,2 
    console.log(listNumber[i]) // 10,27,41
}

// Metodos y clases Genericos

class CustomColletion<T>{//T es el tipo generico
    private itemArray: Array<T>;
    constructor(){
        this.itemArray= [];
    }
    Add(item:T){
        this.itemArray.push(item);
    }
}

class PersonInfo{
    readonly name: string;
    constructor(name: string){
        this.name = name ;
    }
}

let listName = new CustomColletion<string>();
listName.Add("Carlos");
let listAge= new CustomColletion<number>();
listAge.Add(23);
let listPersonInfo = new CustomColletion<PersonInfo>();//Podemos ver que por ser de tipo generico acepta cualquier cosa, en este caso de tipo PersonInfo
listPersonInfo.Add(new PersonInfo("Kaka"));


// Interfaces 

interface Message{
    title: string;
    message: string;
    errorNumber?: number;
}

function WriteMessage(message:Message){
    console.log(message.title);
}


// Modules y namespace
//Con export se pone a disposicion el modulo para ser utilizado por otros modulos
//namespace : nombre comun que le podemos poner a la clase

namespace Validator{
    export interface NumberValidator{
        isValidNumber(value: number): boolean;
    }

    export class ZipCodeValidator implements NumberValidator{
        isValidNumber(value: number): boolean{
            return value > 0 && 10 < value;
        }
    }
}

//Decoradores
// Son funciones que modifican una clase o un metodo

function Logged(){
    return function(target: any){
        console.log("Logged!");
    }
}

@Logged()
class TestDecorator{//Esto da error asi que para corregirlo tenemos que ir al archivo de configuracion tsconfig.json y descomentar la linea de "experimentalDecorators, linea 17 aproximadamente"
    method(): boolean{
        return true;
    }
}
