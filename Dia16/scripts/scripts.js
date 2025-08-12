/*
document.addEventListener('DOMContentLoaded', ()=>{
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton')
})

    async function fetchData(){
        const res = await fetch('https://689a172dfed141b96ba1d5d7.mockapi.io/apiv1/Create')
        data = await res.json;
        return data;
    }

    function displayCapsula(capsula){
        datosContenedor.innerHTML='';
        capsula.forEach(cap => {
            const capDiv = document.createElement('div')
            if(cap.status ==="ready"){
                capDiv.classList.add('capsulaNegativa');
               capDiv.inneerHTML = `` 
            }
            datosContenedor.appendChild(capDiv);
        });
    }
    fetchData().them(data => {
        displayCapsula(data);
    })
    */







    document.addEventListener('DOMContentLoaded',()=>{
        const datosContenedor = document.querySelector('.opciones');
        const taskInput = document.getElementById('taskInput');
        const addTaskButton = document.getElementById('addTaskButton');
    
        async function fetchData(){
            const res =  await fetch('https://66df3340de4426916ee3dd7e.mockapi.io/tareas');
            let data = await res.json();
            return data;
        }
    
    
    
        //console.log(fetchData());
        function displayCapsula(capsula){
            datosContenedor.innerHTML='';
            capsula.forEach(cap =>{
                const capDiv = document.createElement('div')
                if(cap.status==="ready"){
                    capDiv.classList.add('capsulaNegativa');
                    capDiv.innerHTML =`
                    <div class="infoTextNegativo">
                    <p>${cap["task"]}</p>
                </div>
                <div class="botones">
                    <div class="terminadoNegativo">
                        <img src="./storage/img/pngwing.com (2).png" alt="">
                    </div>
                    <div class="eliminadoNegativo">
                        <img src="./storage/img/pngwing.com (4).png" alt="">
                    </div>
                </div>
                    `
                }else if(cap.status==="On hold"){
                    capDiv.classList.add('capsula');
                    capDiv.innerHTML=`
                     <div class="capsula">
                <div class="infoText">
                    <p>${cap["task"]}</p>
                </div>
                <div class="botones">
                    <div class="terminado">
                        <img src="./storage/img/pngwing.com (2).png" id="" alt="">
                    </div>
                    <div class="eliminado">
                        <img src="./storage/img/pngwing.com (4).png" alt="">
                    </div>
                </div>`
                }
                datosContenedor.appendChild(capDiv);
            });
        }
        fetchData().then(data =>{
            displayCapsula(data);
        })
    });