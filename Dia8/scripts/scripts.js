function buscarPersonaje (){
    const nombrePersonaje = prompt("ingresa el ID del personaje");
    const xhr = new XMLHttpRequest ();

    const url = `https://swapi.py4e.com/api/?:id=${nombrePersonaje}`;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try{

            const datos = JSON.parse(xhr.responseText);
                alert("The character is: name:" + datos["results"][0]["name"]);
            }
            catch(err){
                console.log(err.message);
        }
    }
    xhr.send();


    }
}
buscarPersonaje();