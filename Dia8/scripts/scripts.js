function buscarPersonaje (){
    const nombrePersonaje = prompt("ingresa el ID del personaje");
    const xhr = new XMLHttpRequest ();

    const url = `https://swapi.py4e.com/api/`;

    xhr.open("GET", url, true)

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const datos = JSON.parse(xhr.responseText);
            alert("The character is: name:" + datos["results"][0]["name"]);
        }
    }



}