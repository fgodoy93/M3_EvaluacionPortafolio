//Defino arreglo tareas

let tareas = [
    {
        id: 1,
        descripcion: "Estudiar funciones de JavaScript",
        fecha: new Date().getDate() +"-"+ new Date().getMonth() + "-"+ new Date().getFullYear(),
        estado: true
    },
    {
        id: 2,
        descripcion: "Comprar aceite de oliva y pimienta",
        fecha: new Date().getDate() +"-"+ new Date().getMonth() + "-"+ new Date().getFullYear(),
        estado: true
    },
    {
        id: 3,
        descripcion: "Realizar evaluación del módulo 3",
        fecha: new Date().getDate() +"-"+ new Date().getMonth() + "-"+ new Date().getFullYear(),
        estado: true
    },
]

//Mostramos lista inicial
mostrarLista()


    // AGREGAR NUEVA TAREA
$("#agregarTarea").on("click", function() {
    detalleTarea = $("#inputTarea").val().trim()

    //Verificar si la tarea está vacía
    if(!detalleTarea){
        alert("Por favor ingresa escribe la tarea")
        return
    }

    let tarea = {
        id: (tareas.length+1),
        descripcion: detalleTarea,
        fecha: new Date().getDate() +"-"+ new Date().getMonth() + "-"+ new Date().getFullYear(),
        estado: true
    }

    tareas.push(tarea)

    let nuevaFila = `
        <tr>
            <th scope="row">${tarea.id}</th>
            <td>${tarea.descripcion}</td>
            <td>${tarea.fecha}</td>
            <td><a href="#" class="check">Completar</a></td>
            <td><a href="#" class="delete">Eliminar</a></td>
            <td><a href="#" class="edit">Editar</a></td>
        </tr>`

    $("#contenedor-tareas").append(nuevaFila);
    $("#inputTarea").val("")


    alert("Se ha agregado con éxito la nueva tarea")
    return
});

function mostrarLista(){
    let contenedor = $("#contenedor-tareas")

    // MOSTRAR LA LISTA DE TAREAS
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i];
        let card = `
                    <tr>
                        <th scope="row">${tarea.id}</th>
                        <td>${tarea.descripcion}</td>
                        <td>${tarea.fecha}</td>
                        <td><a>Completar</a></td>
                        <td><a>Eliminar</a></td>
                        <td><a>Editar</a></td>
                    </tr>
        `;
        contenedor.append(card);
    }
}

function eliminarTarea(){
    
}
