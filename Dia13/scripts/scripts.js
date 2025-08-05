
function buscarpersonaje(){
    const nombre = prompt("Escriba el nombre del superheroe")
    const xhr = new XMLHttpRequest();

    const url = `https://superheroapi.com/api.php/ea36faee2d3563d1408b1f9b1803e07e/search/${nombre}/`
    xhr.open("GET",url,true)
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            const contenedor = document.getElementById("personaje");
            if(xhr.status === 200){
                try{
                    
                    const datos = JSON.parse(xhr.responseText)
                    contenedor.innerHTML =`
                    <h2>${datos.name}</h2>
                    <p>${datos.id}</p>
            
                `}catch (err){
                    console.log("error");
                }
            }
            else{
                alert("no se encontro personaje");
            }

        }
    }
    xhr.send();  
}
buscarpersonaje()