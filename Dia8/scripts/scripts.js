
// ######################
// ### API star wars ####
// ######################


// Paso 1: 

function buscarPersonaje (){ // Declare una funcion "buscarPersonaje()", para que todo lo que este dentro de {} se ejecute cuando el boton sea precionado 
    const id = prompt("ingresa el ID del personaje"); // creo una variable para que se guarde lo que el usuario ingrese

    const xhr = new XMLHttpRequest();// Se crea un nuevo objeto XMLHttpRequest, que se usa para hacer solicitudes HTTP (AJAX) al servidor sin recargar la página.
    const url = `https://swapi.py4e.com/api/people/${id}/`;// defino la url a la que le hare la solicitud
    // Usamos una plantilla de cadena (backticks `) para insertar la variable id dentro de la URL.
    // ${id} inserta el valor que el usuario escribió.
    // Ejemplo: si el usuario escribe 1, la URL será:
    // https://swapi.py4e.com/api/people/1/

    xhr.open("GET",url,true);
    // .open() prepara la solicitud.
    //"GET" indica el tipo de solicitud HTTP (queremos obtener datos).
    //url es la dirección de destino.
    //true significa que la solicitud será asíncrona (no bloquea la página mientras espera la respuesta).

    xhr.onreadystatechange = function () {
    //  Aquí le decimos a xhr qué hacer cuando cambie su estado (readyState).
    // Se le asigna una función anónima que se ejecuta cada vez que hay un cambio en el estado de la solicitud.
    
        if (xhr.readyState === 4 ) { // se pone una condicion que es si la solicitud tiene un (readyState de 4) se ejecute lo siguiente 
            const contenedor = document.getElementById("personaje");// Busca en el HTML el <div> con id="personaje" y lo guarda en una variable llamada contenedor.
            if (xhr.status === 200) { //  xhr.status indica el código de respuesta HTTP.hacemos un condicional que se ejecuta si la solucitu es de 200 (fue exitosa)
            try{ // try se usa para intentar ejecutar algo que podría fallar.
                const datos = JSON.parse(xhr.responseText);// xhr.responseText contiene el texto de la respuesta (en formato JSON).JSON.parse() convierte ese texto en un objeto JavaScript que podemos usar.
                contenedor.innerHTML = ` 
                <h2>${datos.name}</h2>
                <p> Altura: ${datos.height} </p>
                <p> Genero: ${datos.gender} </p>
                <p> mass: ${datos.mass} </p>
                `;//Se actualiza el contenido del div#personaje con los datos recibidos:
                //datos.name: nombre del personaje
                //datos.height: altura
                //datos.gender: género
                //Usamos una plantilla HTML dentro de JavaScript.

            } catch (err) {
                console.log("Error al procesar los datos: " + err.message); // Si JSON.parse() falla (por ejemplo si la respuesta está mal formada), el bloque catch atrapa el error.
                // console.log(...) imprime el error en la consola del navegador.
            }
        } else {
            contenedor.innerHTML = `<p style="color: red;"> No se encontró el personaje con ID ${id}</p>`; // Si el status no es 200, se muestra un mensaje de error en rojo dentro del div.
        }
        }
    }
    xhr.send(); // Esta línea envía la solicitud al servidor.
}
// buscarPersonaje();// Esto llama automáticamente la función apenas se carga el script.