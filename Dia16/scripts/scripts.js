document.addEventListener('DOMContentLoaded', () => {
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');

    async function fetchData() {
        const res = await fetch('https://689a172dfed141b96ba1d5d7.mockapi.io/apiv1/Create', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        let data = await res.json();
        return data;
    }

    async function addNewTask() {
        const task = taskInput.value;
        console.log(task);
        if (task.trim() === '') return;
        await fetch('https://689a172dfed141b96ba1d5d7.mockapi.io/apiv1/Create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task, status: 'On hold'
            })
        });
        taskInput.value = '';
        const data = await fetchData();
        displayCapsula(data);
    }

    //console.log(fetchData());
    function displayCapsula(capsula) {
        datosContenedor.innerHTML = '';
        capsula.forEach(cap => {
            const capDiv = document.createElement('div')
            if (cap.status === "ready") {
                capDiv.classList.add('capsulaNegativa');
                capDiv.innerHTML = `
                <div class="infoTextNegativo">
                <p>${cap["task"]}</p>
            </div>
            <div class="botones">
                <div class="terminadoNegativo">
                    <img src="./img/img1.png" status="${cap["status"]}" data-id="${cap["id"]}" alt="" class='completado'>
                </div>
                <div class="eliminadoNegativo">
                    <img src="./img/img2.png" status="${cap["status"]}" data-id="${cap["id"]}" alt="" class='eliminado'>
                </div>
            </div>
                `
            } else if (cap.status === "On hold") {
                capDiv.classList.add('capsula');
                capDiv.innerHTML = `
                 <div class="capsula">
            <div class="infoText">
                <p>${cap["task"]}</p>
            </div>
            <div class="botones">
                <div class="terminado">
                    <img src="./img/img1.png" status="${cap["status"]}" data-id="${cap["id"]}"  alt="" class='completado'>
                </div>
                <div class="eliminar">
                    <img src="./img/img2.png" status="${cap["status"]}" data-id="${cap["id"]}" alt="" class='eliminado'>
                </div>
            </div>`
            }
            datosContenedor.appendChild(capDiv);
        });
        document.querySelectorAll('.completado').forEach(button => {
            button.addEventListener('click', botonCompletado);
        });
        document.querySelectorAll('.eliminado').forEach(button => {
            button.addEventListener('click', botonEliminado);
        });
    }
    fetchData().then(data => {
        displayCapsula(data);
    });
    addTaskButton.addEventListener('click', addNewTask);
    async function botonCompletado() {
        const id = event.target.getAttribute('data-id');
        const status = event.target.getAttribute('status');
        if (status == "On hold") {
            await fetch(`https://689a172dfed141b96ba1d5d7.mockapi.io/apiv1/Create/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: 'On hold'
                })
            });
        } else {
            await fetch(`https://689a172dfed141b96ba1d5d7.mockapi.io/apiv1/Create/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: 'On hold'
                })
            });
        }

        const data = await fetchData();
        displayCapsula(data);
    }
    async function botonEliminado() {
        const id = event.target.getAttribute('data-id');
        await fetch(`https://689a172dfed141b96ba1d5d7.mockapi.io/apiv1/Create/${id}`, {
            method: 'DELETE'
        });
        const data = await fetchData();
        displayCapsula(data);
    }
});




