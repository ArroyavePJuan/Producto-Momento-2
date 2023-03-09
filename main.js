const caja1 = document.querySelector('#caja1');
const caja2 = document.querySelector('#caja2');
const iniciar =document.querySelector("#iniciar");
const usuario = document.querySelector('#usuario');
const passw = document.querySelector('#passw');


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
    formulario.reset();
})

const cliente = document.querySelector("Clientes");

cliente.addEventListener("click", () => {
let opciones = document.querySelector("#opciones");
let clientes = document.querySelector("#clientes");
opciones.classList.remove("ocultar");
opciones.classList.add("mostrar");
clientes.classList.remove("mostrar");
clientes.classList.add("ocultar");
})

const btnFormularios = document.querySelector("#btnFormularios");

btnFormularios.addEventListener("click", () => {
let opciones = document.querySelector("#opciones");
let clientes = document.querySelector("#clientes");
opciones.classList.remove("mostrar");
opciones.classList.add("ocultar");
clientes.classList.remove("ocultar");
clientes.classList.add("mostrar");
})



/* const guardar_info_clientes = () =>{
    let datos = []
    let nombre = document.querySelector('nombre_cli').value 
    datos[0]=nombre
    let referencia = document.querySelector('documento_cli').value
    datos[1]=referencia
    let codigo = document.querySelector('celular_cli').value
    datos[2]=codigo
    let valor = document.querySelector('direccion_cli').value
    datos[3]=valor
    let cantidad = document.querySelector('correo_cli').value
    datos[4]=cantidad

    if(nombre == ""){

    }else{
        let div = document.createElement('div')
        let section = document.querySelector('form_clientes')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let p4 = document.createElement('p')
        let p5 = document.createElement('p')
        
        div.className = 'card'
        p.textContent = "Nombre: " + nombre
        p2.textContent = "Documento: " + referencia
        p3.textContent = "Celular: " + codigo
        p4.textContent = "Direccion: " + valor
        p5.textContent = "Correo: " + cantidad
        
        section.append(div)
        div.append(p)
        div.append(p2)
        div.append(p3)
        div.append(p4)
        div.append(p5)

    } 
}

btn_form_clientes.addEventListener('click',guardar_info_clientes)

function vaciar_clientes(){
let nombre = document.querySelector('nombre_cli').value = ""
let referencia = document.querySelector('documento_cli').value =""
let codigo = document.querySelector('celular_cli').value = ""
let valor = document.querySelector('direccion_cli').value = ""
let cantidad = document.querySelector('correo_cli').value = ""
} */




