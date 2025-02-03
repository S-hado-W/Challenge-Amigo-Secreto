// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];


function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, inserte un nombre.");
    }
    else {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
        listarAmigos();
    }
    
}


function listarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    listaAmigos.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) { // Iterar sobre el arreglo
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigos[i]; // Agregar el nombre del amigo
        listaAmigos.appendChild(li); // Agregar <li> a la lista
    }

}
