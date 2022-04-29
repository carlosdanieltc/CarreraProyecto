//Matriz de descuentos
var descuentos ={
    novice : 0.4,
    pro: 0.2
}


// function aplica descuentos
var discounter = function (clientType, tariff){
    return this[clientType] * tariff;
}

console.log(discounter.call(descuentos,"novice",100));
//console.log(discounter.apply(descuentos,["novice",100]));

//var discounterByProfile = discounter.bind(descuentos);

//console.log(discounterByProfile("novice",100));

