// Hecho por: Angel Rafael Muñoz Barradas

let amigos = []; // Creación de la variable


// Función para agregar amigos
function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value; // Obtención del valor de 'amigo'


// Verificar si esta vacio
    if (amigoNuevo === ''){
        alert('Por favor ingrese un nombre');
    } else {
        amigos.push(amigoNuevo); //Agrega el texto ingresado
        document.querySelector('#amigo').value = ''; // Vaciado de la barra 
    }
    listaDeAmigos(); // Muestreo de la lista de amigos
}

// Función para actualizar la lista de amigos
function listaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";  // Limpieza de la lista

    // Iteraciones para la creación de elementos de lista
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement('li'); // Creación de cada elemento de la lista
        li.textContent = amigos[i];     // Guardar el valor de cada dato del indice de 'amigos'
        lista.appendChild(li);   // Agrega cada elemento nuevo (li) a la lista original (lu);   
    }   

}

// Desarrollo de la función para sortear amigo
function sortearAmigo() {
    // Validar si hay amigos disponibles en el array
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return;  // Sale de la función si el array está vacío
    }

    // Generar un índice aleatorio entre 0 y el tamaño del array menos 1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado en el HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}

// Para fines prácticos esta función permite evitar tener que presionar el 
// botón y que con solo presionar 'Enter' se realice la función
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
        agregarAmigo(); // Llama a la función al presionar Enter
    }
})

