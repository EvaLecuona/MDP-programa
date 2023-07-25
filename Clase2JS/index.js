const prompt= require('prompt-sync')({sigint:true})
let a= prompt('Ingrese un valor: ');
console.log(a);
let b= prompt('Ingrese un valor: ');
console.log(a);
let c= prompt('Ingrese un valor: ');
console.log(a);

if(a > b && a > c){
    console.log('El numero ingresado es el mayor A')
}
else if(b > a && b > c){
    console.log('El numero ingresado es el mayor B')
}
else{
    console.log('El numero ingresado es el mayor C')
}


const prompt= require('prompt-sync')({sigint:true})
let tabla=prompt('Ingrese un numero que multiplique 8');
switch(tabla){
    case '1':
         console.log(8*1);
    break;
    case '2':
         console.log(8*2);
    break;
    case '3':
         console.log(8*3);
    break;
    case '4':
         console.log (8*4);
    break;
    case '5': 
         console.log(8*5);
    break;
    case '6': 
         console.log(8*6);
    break;
}



const prompt= require('prompt-sync')({sigint:true})
let tabla=prompt('Ingrese un numero que divida el 8');
switch(tabla){
    case '1':
         console.log(8/8);
    break;
    case '2':
         console.log(16/8);
    break;
    case '3':
         console.log(24/8);
    break;
    case '4':
         console.log (32/8);
    break;
    case '5': 
         console.log(40/8);
    break;
    case '6': 
         console.log(8*6);
    break;
}