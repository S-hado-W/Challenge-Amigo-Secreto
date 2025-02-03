// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];
let listaAmigos = "";


function agregarAmigo() {
    let amigo = document.getElementById("amigo").value; // Obtener el elemnto ingresado
    if (amigo === "") {                                 // Validar si el campo esta vacio
        alert("Por favor, inserte un nombre.");
    }
    else {                                              // Agregar elemento al array
        amigos.push(amigo);
        document.getElementById("amigo").value = "";    // Limpiar elemento de entrada
        listarAmigos();                                 // Llamar a la funcion para listar amigos            
    }
    
}


function listarAmigos() {
    listaAmigos = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    listaAmigos.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) { // Iterar sobre el arreglo
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigos[i]; // Agregar el nombre del amigo
        listaAmigos.appendChild(li); // Agregar <li> a la lista
    }

}

function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return "Agrega amigos para sortear.";
    }

    // Generar un índice aleatorio y obtener el amigo sorteado
    let indiceSorteo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteo];

    console.log(amigoSorteado); // Mostrar en la consola (opcional)

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerHTML = "🎉 El amigo secreto es: " + amigoSorteado;

}

