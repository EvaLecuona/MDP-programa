const prompt= require('prompt-sync')({sigint:true})

let dataPerson = [];

const adddataPerson = (firstName, lastName, age,insert=true) =>{
    let persona={
        firstName,
        lastName,
        age,
    }
    if (insert){
        dataPerson.push(persona);

    }
    else{
        dataPerson.unshift(persona);
    }
}

adddataPerson('maria','fernandez',20)
adddataPerson('susana', 'gonzalez',45)
adddataPerson('daniel', 'truzzo',70)
adddataPerson('axel','rodriguez',17)
adddataPerson('florencia','perez',27)
adddataPerson('rodrigo','lecuona',34)
adddataPerson('maria','fernandez',20)
adddataPerson('susana', 'gonzalez',45)
adddataPerson('daniel', 'truzzo',70)
adddataPerson('axel','rodriguez',3)
adddataPerson('florencia','perez',27)
adddataPerson('rodrigo','lecuona',3)
adddataPerson('daniel', 'truzzo',74)
adddataPerson('axel','rodriguez',7)
adddataPerson('florencia','perez',21)

const calcularPromedio= ()=>{
    let suma=0;
    dataPerson.forEach((element)=>{
        suma = suma + element.age;
    });


     let promedio=suma / dataPerson.length
     
     console.table(promedio);
}

calcularPromedio();

/*let dataPerson = [];

const adddataPerson = (firstName, lastName, age,insert=true) =>{
    let persona={
        firstName,
        lastName,
        age,
    }
    if (insert){
        dataPerson.push(persona);

    }
    else{
        dataPerson.unshift(persona);
    }
}

adddataPerson('maria','fernandez',20)
adddataPerson('susana', 'gonzalez',45)
adddataPerson('daniel', 'truzzo',70)
adddataPerson('axel','rodriguez',17)
adddataPerson('florencia','perez',27)
adddataPerson('rodrigo','lecuona',34)
adddataPerson('maria','fernandez',20)
adddataPerson('susana', 'gonzalez',45)
adddataPerson('daniel', 'truzzo',70)
adddataPerson('axel','rodriguez',3)
adddataPerson('florencia','perez',27)
adddataPerson('rodrigo','lecuona',3)
adddataPerson('daniel', 'truzzo',74)
adddataPerson('axel','rodriguez',7)
adddataPerson('florencia','perez',21)

let typekeyword= prompt ('Ingrese las letras o palabra claves a buscar: ');

let dataFilterPerson =dataPerson.filter((element)=>{
    typekeyword= typekeyword.toUpperCase();
    let firstName= element.firstName.toUpperCase();
    let lastName= element.lastName.toUpperCase();
    return (firstName.includes(typekeyword)|| lastName.includes(typekeyword))
})

console.table(dataFilterPerson)*/