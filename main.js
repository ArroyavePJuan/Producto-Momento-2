const caja1 = document.querySelector('#caja1');
const caja2 = document.querySelector('#caja2');
const usuario = document.querySelector('#usuario');
const passw = document.querySelector('#passw');


const iniciar =document.querySelector("#iniciar");

iniciar.addEventListener("click", () => {  
if(usuario.value === '' && passw.value === '')  {
    let caja1 = document.querySelector("#caja1");
    let caja2 = document.querySelector("#caja2");
    caja1.classList.add("ocultar");
    caja1.classList.remove("mostrar");
    caja2.classList.add("mostrar");
    caja2.classList.remove("ocultar");
} else {
        alert ('error:  usuario incorrecto o contraseña incorrecta');
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
    cardCliente.classList.remove("mostrar");
    cardCliente.classList.add("ocultar");
    formulario.reset();
})

const cliente = document.querySelector("#btnCliente");

cliente.addEventListener("click", () => {
let opciones = document.querySelector("#opciones");
let caja3 = document.querySelector("#caja3");
caja3.classList.remove("ocultar");
caja3.classList.add("mostrar");
opciones.classList.remove("mostrar");
opciones.classList.add("ocultar");
cardCliente.classList.remove("mostrar");
cardCliente.classList.add("ocultar");
formulario.reset();
})

const btnFormularios = document.querySelector("#btnFormularios");

btnFormularios.addEventListener("click", () => {
let opciones = document.querySelector("#opciones");
let caja3 = document.querySelector("#caja3");
caja3.classList.remove("mostrar");
caja3.classList.add("ocultar");
opciones.classList.remove("ocultar");
opciones.classList.add("mostrar");
cardCliente.classList.remove("mostrar");
cardCliente.classList.add("ocultar");
formulario.reset();
})

const telefono = document.querySelector("#btnTelefono");

telefono.addEventListener("click", () => {
    let opciones = document.querySelector("#opciones");
    let caja4 = document.querySelector("#caja4");
    caja4.classList.remove("ocultar");
    caja4.classList.add("mostrar");
    opciones.classList.remove("mostrar");
    opciones.classList.add("ocultar");
    cardCliente.classList.remove("mostrar");
    cardCliente.classList.add("ocultar");
    formulario.reset();
})

const btnFormularios2 = document.querySelector("#btnFormularios2");
btnFormularios2.addEventListener("click", () => {
    let opciones = document.querySelector("#opciones");
    let caja4 = document.querySelector("#caja4");
    caja4.classList.remove("mostrar");
    caja4.classList.add("ocultar");
    opciones.classList.remove("ocultar");
    opciones.classList.add("mostrar");
    cardCliente.classList.remove("mostrar");
    cardCliente.classList.add("ocultar");
    formulario.reset();
})

const portatil = document.querySelector("#btnPortatil");

portatil.addEventListener("click", () => {
    let opciones = document.querySelector("#opciones");
    let caja5 = document.querySelector("#caja5");
    caja5.classList.remove("ocultar");
    caja5.classList.add("mostrar");
    opciones.classList.remove("mostrar");
    opciones.classList.add("ocultar");
    cardCliente.classList.remove("mostrar");
    cardCliente.classList.add("ocultar");
    formulario.reset();

})

const btnFormularios3 = document.querySelector("#btnFormularios3");

btnFormularios3.addEventListener("click", () => {
    let opciones = document.querySelector("#opciones");
    let caja5 = document.querySelector("#caja5");
    caja5.classList.remove("mostrar");
    caja5.classList.add("ocultar");
    opciones.classList.remove("ocultar");
    opciones.classList.add("mostrar");
    cardCliente.classList.remove("mostrar");
    cardCliente.classList.add("ocultar");
    formulario.reset();
})

const enviarCliente = document.querySelector("#enviarCliente");

enviarCliente.addEventListener('click', () => {

    let nombreCliente = document.querySelector("#nombre");
    let documento = document.querySelector("#documento");
    let cel = document.querySelector("#cel");
    let direccion = document.querySelector("#direccion");
    let correo = document.querySelector("#correo");
    let cardCliente = document.querySelector("#card-cliente");

    cliente.classList.add("mostrar");
    cliente.classList.remove("ocultar");

    let cards =
    
    `
        <img src="img/user.png" width="auto" height="150px">
        
        <h1 class="titulo">${nombreCliente.value}</h1>
        <section class="container-interno">

            <section class="info">
                    <h2>Documento</h2>
                    <h1>${documento.value}</h1>
            </section>
            <section class="info">
                    <h2>Celular</h2>
                    <h1>${cel.value}</h1>
            </section>
            <section class="info">
                    <h2>Direccion</h2>
                    <h1>${direccion.value}</h1>
            </section>
                <section class="info">
                    <h2>Correo</h2>
                <h1>${correo.value}</h1>
            </section>
        </section>
    `;
    cardCliente.innerHTML = cards;
    cardCliente.classList.add("mostrar");
    cardCliente.classList.remove("ocultar");
})
