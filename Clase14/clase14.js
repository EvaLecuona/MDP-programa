const btnSubmit = document.getElementById('btn-submit');
const text= document.getElementById('text');
const country=document.getElementById('country')
const email = document.getElementById('email');

btnSubmit.addEventListener('click', () => {

    if(email.value){
        alert('Formulario enviado')
    }else{
        alert('El campo no esta completo')
    }
});
text.addEventListener('click',()=>{
    if(text.value){
        alert('Formulario enviado')
    }else{
        alert('El campo no esta completo')
    }
})

