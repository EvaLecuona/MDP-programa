const sendForm=document.getElementById('sendForm');
const login=document.getElementById('login');
const logout= document.getElementById('logout');

login.addEventListener('click', ()=>{
    let emailLogin= document.getElementById('emailLogin');
    let passwordLogin= document.getElementById('passwordLogin');
    let welcome=document.getElementById('welcome');
    let welcomename= document.getElementById('welcome-name');


    let user = userArray.find(user => user.email === emailLogin.value);

    if(user && user.password === passwordLogin.value ){
        welcomename.innerHTML= user.name; 
        welcome.classList.remove('d-none');
        let loggedUser2 = JSON.stringify(user);
        sessionStorage.setItem('loggedUser', loggedUser2);
    } else if(user && user.password !== passwordLogin.value ) {
        alert('La contraseña es incorrecta');
    } else {
        alert('Este usuario no esta registrado');
    }

});

sendForm.addEventListener('click',()=>{
    let name=document.getElementById('name');
    let lastName=document.getElementById('lastName');
    let password=document.getElementById('password');
    let welcome=document.getElementById('welcome');
    let email=document.getElementById('email');
    let welcomename= document.getElementById('welcome-name');
    welcomename.innerHTML= name.value; 
    addUser( name.value, lastName.value, password.value, email.value);
    welcome.classList.remove('d-none');
    storagedataUser();


}); 
logout.addEventListener('click',()=>{
    let welcome=document.getElementById('welcome');
    welcome.classList.add('d-none');
    let loggedUser2 = sessionStorage.removeItem('loggedUser');
    let user = JSON.parse(loggedUser2);
});
let userArray = [];
const addUser = (name, lastName, password, email) => {
    let user = {
        name,
        lastName,
        password,
        email
    }
    userArray.push(user);
    let loggedUser2 = JSON.stringify(user);
    sessionStorage.setItem('loggedUser', loggedUser2);
}

const storagedataUser = () =>{
    let dataUser = JSON.stringify(userArray);
    localStorage.setItem('users', dataUser);
}

if(localStorage.getItem('users') != null){
    let dataUser = localStorage.getItem('users');
    userArray = JSON.parse(dataUser);
}

if(sessionStorage.getItem('loggedUser') != null){
    let loggedUser2 = sessionStorage.getItem('loggedUser');
    let user = JSON.parse(loggedUser2);

    let welcome=document.getElementById('welcome');
    let welcomename= document.getElementById('welcome-name');
    welcome.classList.remove('d-none');
    welcomename.innerHTML= user.name; 
}