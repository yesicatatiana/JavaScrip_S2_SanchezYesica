/*const api = new XMLHttpRequest ();

api.open("GET,https://rickandmortyapi.com/api/character",true)*/



// consumo de API
// medianteXMLHttpRequest

//Modularizar el consumo de la api

function buscarPersonaje(){
    const nombreUsar = promt("ingresar el nombre de el personaje");
    const xhr = new XMLHttpRequest (); // la importacion del xml

    const url = `https://rickandmortyapi.com/api/character/?:id=${nombreUsar}`; // Acento Iverso ``
    console.log(url)
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            try{

                const datos = JSON.parse(xhr.responseText);
                alert("The character is: name:" + datos["results"][0]["name"]+" status:"+ datos["results"][0]["status"]+" specie:"+datos["results"][0]["species"]);
            }
            catch(err){
                console.log(err.message); // si algo malo pasa simplemente imprima el error
            }
        }
        xhr.send();
    }
}

buscarPersonaje();