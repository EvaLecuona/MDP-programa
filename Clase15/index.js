let contadorItems = 2;
const agregar= document.getElementById('agregar')
const remover1=document.getElementById('remover1')
const remover2=document.getElementById('remover2')
const fila1=document.getElementById('fila1')
const fila2=document.getElementById('fila2')
const additem=document.getElementById('additem')
const addcontainer=document.getElementById('addcontainer')

remover1.addEventListener('click', ()=>{
    fila1.remove();
})
remover2.addEventListener('click', ()=>{
    fila2.remove();
})

agregar.addEventListener('click',function(){
    contadorItems = contadorItems + 1;
    let name = additem.value;
    let divCreate=document.createElement('div');
    divCreate.innerHTML=`
        <div class="col bg-primary-subtle border border-dark">${name}</div>
        <div class="col bg-primary-subtle border border-dark">
            <button id="remover${contadorItems}" type="submit" class="btn btn-dark mb-3">Eliminar</button>
        </div>
    `;
    divCreate.id = `fila${contadorItems}`;
    divCreate.classList.add('row', 'row-cols-2');
    addcontainer.appendChild(divCreate);
    const remover=document.getElementById(`remover${contadorItems}`)
    remover.addEventListener('click',()=>{
        divCreate.remove();
    })
})
