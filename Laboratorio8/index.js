const contenedor1= document.getElementById('contenedor1');
const contenedor2= document.getElementById('contenedor2');
const change= document.getElementById('change');
const back= document.getElementById('back');

change.addEventListener('click', () => {
    contenedor1.classList.add('d-none');
    contenedor2.classList.remove('d-none');
    change.classList.add('d-none');
    back.classList.remove('d-none');
});

back.addEventListener('click',() => {
    contenedor1.classList.remove('d-none');
    contenedor2.classList.add('d-none');
    back.classList.add('d-none');
    change.classList.remove('d-none');
});