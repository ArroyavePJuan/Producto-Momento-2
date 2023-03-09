const caja1 = document.querySelector('#caja1');
const caja2 = document.querySelector('#caja2');
const iniciar =document.querySelector("#iniciar");
const usuario = document.querySelector('#usuario');
const passw = document.querySelector('#passw');


iniciar.addEventListener("click", () => {  
if(usuario.value === `test` && passw.value === `123`)  {
    let caja1 = document.querySelector("#caja1");
    let caja2 = document.querySelector("#caja2");
    caja1.classList.add("ocultar");
    caja1.classList.remove("mostrar");
    caja2.classList.add("mostrar");
    caja2.classList.remove("ocultar");
}

else {
    alert (`error: ${usuario.value} incorrecto o ${contraseña.value} incorrecta`)
}
})

const cerrar = document.querySelector("#btnCerrar");

cerrar.addEventListener("click", () => {
    let caja1 = document.querySelector("#caja1");
    let caja2 = document.querySelector("#caja2");
    caja1.classList.remove("ocultar");
    caja1.classList.add("mostrar");
    caja2.classList.remove("mostrar");
    caja2.classList.add("ocultar");
    formulario.reset();
})

const menuCelulares =() => {

}

const menuClientes =() => {
    
}

const menuPortatiles =() => {
    
}

