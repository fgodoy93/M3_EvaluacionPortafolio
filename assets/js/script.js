//Defino arreglo tareas
let tareasCompletas = []
let tareas = [
    {
        id: Math.round(Math.random(0,1000)*1000+1),
        nombre: "Estudiar JavaScript",
        descripcion: "Repaso de funciones, arreglos y objetos",
        fecha: new Date().toLocaleDateString(),
        estado: true
    },
    {
        id: Math.round(Math.random(0,1000)*1000+1),
        nombre: "Compras del supermercado",
        descripcion: "Comprar aceite de oliva, arroz y pimienta",
        fecha: new Date().toLocaleDateString(),
        estado: true
    },
    {
        id: Math.round(Math.random(0,1000)*1000+1),
        nombre: "Ponerse al día con las tareas",
        descripcion: "Realizar evaluación del módulo 3",
        fecha: new Date().toLocaleDateString(),
        estado: true
    },
]

//Mostramos lista inicial de tareas
mostrarTareas()


    // AGREGAR NUEVA TAREA
$("#agregarTarea").on("click", function() {
    nombreTarea = $("#inputNombre").val().trim()
    //Verifico si el input nombre esta vacio
    if(!nombreTarea){
        alert("Por favor ingresa una tarea")
        return
    }
    detalleTarea = $("#inputDescripcion").val().trim()

    //Verifico si el input detalle esta vacio
    if(!detalleTarea){
        alert("Por favor describe la tarea")
        return
    }

    //Si no está vacía creamos un nuevo objeto "tarea"
    let tarea = {
        id: Math.round(Math.random(0,1000)*1000+1),
        nombre: nombreTarea,
        descripcion: detalleTarea,
        fecha: new Date().toLocaleDateString(),
        estado: true
    }
    //Guardamos el objeto en el arreglo tareas
    tareas.push(tarea)

    //creamos una nueva fila del acordeón
    let nuevaFila = `
        <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse[${tarea.id}]" aria-expanded="true" aria-controls="collapseOne">
                        <div class="col-1">#${tareas.length} </div> 
                        <div class="col"><strong>${tarea.nombre}</strong></div>                    
                    </button>
                    </h2>
                    <div id="collapse[${tarea.id}]" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body flex">
                        ${tarea.descripcion}<br><br>
                        ID Tarea: #${tarea.id}<br><br>
                        Fecha de creación: ${tarea.fecha}<br><br>
                        <div class="row text-center">
                            <div class="col">
                                <button data-id="${tarea.id}" class="btn btn-success confirmarTarea">Completar</button>
                            </div>
                            <div class="col">
                                <button data-id="${tarea.id}" class="btn btn-primary editarTarea">Editar</button>
                            </div>
                            <div class="col">
                                <button data-id="${tarea.id}" class="btn btn-danger eliminarTarea">Eliminar</button>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    </div>
                </div>`

    //Agregamos la fila al contenedor que genera el acordeón dinámicamente
    $("#contenedor-tareas2").append(nuevaFila);
    //Dejamos los input en blanco
    $("#inputNombre").val("")
    $("#inputDescripcion").val("")


    alert("Se ha agregado con éxito la nueva tarea")
    return
});

//CONFIRMAR UNA TAREA
$(document).on("click", ".terminarTarea", function() {
    //Rescatamos el id del elemento asignado en el boton
    const id = parseInt($(this).data("id"))
    confirmarTarea(id)
})

//ELIMINAR UNA TAREA
$(document).on("click", ".eliminarTarea", function() {
    let id = parseInt($(this).data("id"))
    eliminarTarea(id)
})

//EDITAR UNA TAREA
$(document).on("click", ".editarTarea", function() {
    //Rescatamos el id del elemento asignado en el boton
    const id = parseInt($(this).data("id"));

    //Buscamos en el arreglo la tarea según el id
    let tarea = tareas.find(t => t.id === id);
    if (!tarea) return;

    //Se filtra la tarea del arreglo (se excluye la tarea con este id)
    let nuevaTarea = "";

    do {
        nuevaTarea = prompt("Ingrese el nombre de la tarea:");
        if (nuevaTarea === null) {
            // Si cancela el prompt, salimos sin hacer cambios
            return;
        }
        nuevaTarea = nuevaTarea.trim();
        if (nuevaTarea === "") {
            alert("Ingrese un nombre para la tarea.");
        }
    } while (nuevaTarea === "");

    // Si todo está bien, asignamos
    tarea.nombre = nuevaTarea;

    let nuevaDescripcion = "";

    do {
        nuevaDescripcion = prompt("Ingrese la descripción de la tarea:");
        if (nuevaDescripcion === null) {
            // Si cancela el prompt, salimos sin hacer cambios
            return;
        }
        nuevaDescripcion = nuevaDescripcion.trim();
        if (nuevaDescripcion === "") {
            alert("Ingrese una descripción para la tarea.");
        }
    } while (nuevaDescripcion === "");

    // Si todo está bien, asignamos
    tarea.descripcion = nuevaDescripcion;


    //Se vacia el contenedor y se carga nuevamente la lista actualizada
    $("#contenedor-tareas2").empty();
    mostrarTareas();
});

function mostrarTareas(){
    let contenedor = $("#contenedor-tareas2")

    // MOSTRAR LA LISTA DE TAREAS
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i];
        let card = `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse[${tarea.id}]" aria-expanded="true" aria-controls="collapseOne">
                        <div class="col-1">#${i+1} </div> 
                        <div class="col"><strong>${tarea.nombre}</strong></div>                    
                    </button>
                    </h2>
                    <div id="collapse[${tarea.id}]" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body flex">
                        ${tarea.descripcion}<br><br>
                        ID Tarea: #${tarea.id}<br><br>
                        Fecha de creación: ${tarea.fecha}<br><br>
                        <div class="row text-center">
                            <div class="col">
                                <button data-id="${tarea.id}" class="btn btn-success terminarTarea">Completar</button>
                            </div>
                            <div class="col">
                                <button data-id="${tarea.id}" class="btn btn-primary editarTarea">Editar</button>
                            </div>
                            <div class="col">
                                <button data-id="${tarea.id}" class="btn btn-danger eliminarTarea">Eliminar</button>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
        `;
        contenedor.append(card);
    }
}

function mostrarTareasCompletas(){
    let contenedor = $("#contenedor-tareas-completas")

    // MOSTRAR LA LISTA DE TAREAS
    for (let i = 0; i < tareasCompletas.length; i++) {
        let tarea = tareasCompletas[i];
        let card = `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse[${tarea.id}]" aria-expanded="true" aria-controls="collapseOne">
                        <div class="col-1">#${i+1} </div> 
                        <div class="col"><strong>${tarea.nombre}</strong></div>                    
                    </button>
                    </h2>
                    <div id="collapse[${tarea.id}]" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body flex">
                        ${tarea.descripcion}<br><br>
                        ID Tarea: #${tarea.id}<br><br>
                        Fecha de término: ${tarea.fecha}<br><br>                                               
                    </div>
                    
                    </div>
                </div>
        `;
        contenedor.append(card);
    }
}


function eliminarTarea(id) {
    //Preguntamos si está seguro de eliminar la tarea
    let confirmarEliminacion = confirm("¿Estás seguro de eliminar esta tarea?")
    if (!confirmarEliminacion) {
        return
    }
    //Elimina la tarea seleccionada
    tareas = tareas.filter(t => t.id !== id)

    //Actualiza la lista
    $("#contenedor-tareas2").empty()
    mostrarTareas()
}

function confirmarTarea(id){
    let confirmarTarea = confirm("¿Has completado esta tarea?")
    if(!confirmarTarea){
        return
    }
        tareaLista = tareas.find(t => t.id == id)
        tareasCompletas.push(tareaLista)
    
        tareas = tareas.filter(t => t.id !== id)
        
        $("#contenedor-tareas2").empty()
        $("#contenedor-tareas-completas").empty()
        mostrarTareas()
        mostrarTareasCompletas()
        console.log(tareasCompletas)

}