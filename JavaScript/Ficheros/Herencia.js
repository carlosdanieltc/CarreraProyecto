// Prototipos
let pokemon = {
    eats : true,
    drinks() {
        console.log("Glub glub...")
    }    
};

let charmander = {
    fire: true,
    power : 200,
    __proto__: pokemon
};

let charmeleon = {
    earLenght: 10,
    power : 1000,
    __proto__: charmander
};

//
console.log(charmander.power)//200
console.log(charmeleon.power)//1000

