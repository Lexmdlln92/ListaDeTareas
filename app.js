// manipulacion del dom 'id'
const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

// empezamos adefinir las funciones

function agregarTarea() {
    if (input.value){

        // esta variable crea la tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        // esta crea el texto que ingresa el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        // crear y agregar contenido de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos); 

        // iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar,eliminar);
        // este input.value = '' regresa el estado del place holder a "ingresar tarea"

        input.value = '';


        // Agregar tarea a la lista
        listaDeTareas.appendChild(tareaNueva);
    } else {
        alert('por favor ingresa una tarea.')
    }

}

// creamos las funciones para los iconos de completarTarea

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

// creamos las funciones para los iconos de eliminarTarea, pero cambiamos el metodo de classList.toggle por remove

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();

}


boton.addEventListener ('click' , agregarTarea);


// este evento es para que al precionar enter cree la tarea nueva sin nececidad de dar click en el boton.
input.addEventListener ('keydown' , (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});