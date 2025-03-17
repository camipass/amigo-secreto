// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    //Capturar el valor del campo de entrada
    const dato = document.getElementById("amigo");
    const nombreAgregado = dato.value;

    //Validar la entrada
    if(nombreAgregado === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Actualizar el array de amigos
    amigos.push(nombreAgregado);
    actualizarLista();

    // Limpiar el campo de entrada
    dato.value = ""; 
}

function actualizarLista() {
    // Seleccionar lista donde se mostrarán los amigos
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpiar lista

    // Recorro el array amigos
    for (let i=0; i<amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item); //Agrego el nombre en la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo para sortear.");
        return;
    }

    //Sortear amigo
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];

    //Mostrar resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
