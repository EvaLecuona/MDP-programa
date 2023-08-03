const prompt= require('prompt-sync')({sigint:true})

let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10];

let numerosmayores= numeros.filter((element) => {
    return (element>10);
});
console.table(numerosmayores);

let cars = ['VWUp', 'RenaultSandero', 'VWGol', 'FiatUno'];

let pos= cars.indexOf('fiatUno')
let fiatUno= cars.splice(pos,1)
console.table(cars);

let FordFiesta= cars.push('FordFiesta')
console.table(cars);

let VWUp= cars.shift()
let VWFox= cars.unshift('VWFox')
console.table(cars);