// #################
// #### Quiz js ####
// #################





/*  let ingredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
]



let booleanito = true

while (booleanito){
    let consul = prompt(`
    ========= Consultas ===========
    1. Encontrar todos los ingredientes con stock menor a 400
    2. Encontrar todas las hamburguesas de la categoría “Vegetariana”.
    `
    )
    if(consul === 1) {
        alert[ingredientes"stock"]
    else if (consul === 2)
        alert[ingredientes""]

    }
}



let inventario = 

while (inventario){
    let opcion = prompt(`
    ============
    `)
}*/





/*let ingredientes [];


let inventario = true;

while(inventario){
    let nombreIngre = prompt(`ingresa el nombre del ingrediente`)
    let descripcionIngre = prompt (`ingrese la descripcion de los ingredientes`)
    let precioIngre = prompt(`ingrese el precio del ingrediente`)
    let stockIngre = prompt(`ingrese el stock del ingrediente`)
    
    if (nombreIngre)


}
*/



let ingredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
]




let categorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]



let hambur = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]


let chef = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]













booleanito = true

while(booleanito){
    let consulta = parseInt(prompt(`
    =================================
    === Inventario hamburgueseria ===
    =================================
    1. Consultar ingredientes
    2. Consultar categorias
    3. Consultar hamburguesas
    4. Consultar chefs
    
    (ingrese el numero de la opcion que desee)
    `))

    if(consulta === 1){

    let opcMenuPrincipal = parseInt(prompt(`
    ==========================
    === info inngredientes ===
    ==========================
    1. Nombre del ingrediente
    2. Descripcion ingrediente 
    3. Precio del ingrediente 
    4. Stock  del ingrediente 

    (ingrese el numero de la opcion que desee)
    `))
    if(opcMenuPrincipal === 1){
        for(let i = 0; i < ingredientes.length; i++){
            alert(ingredientes[i].nombre)
        }
    }
    else if(opcMenuPrincipal === 2){
        for(let i = 0; i < ingredientes.length; i++){
            alert(ingredientes[i].descripcion)
        }
    }
    else if(opcMenuPrincipal === 3){
        for(let i = 0; i < ingredientes.length; i++){
            alert(ingredientes[i].precio)
        }
    }
    else if(opcMenuPrincipal === 4){
        for(let i = 0; i < ingredientes.length; i ++){
            alert(ingredientes[i].stock)
        }
    }
    }

    else if(consulta === 2){
    let opc2 = parseInt(prompt(`
    ==========================
    === info categorias ===
    ==========================
    1. Nombres de las categorias
    2. Descripcion de las categorias 

    (ingrese el numero de la opcion que desee)
    `))
    if(opc2 === 1){
        for(let i = 0; i < categorias.length; i++){
            alert(categorias[i].nombre)
        }
    }
    else if(opc2 === 2){
        for(let i = 0; i < categorias.length; i++){
            alert( categorias[i].descripcion)
        }
    }
    }


    else if (consulta === 3){
    let opc3 = parseInt(prompt(`
    ==========================
    ======= info hambur ======
    ==========================
    1. Nombre de las hamburguesas
    2. Categoria de las hamburguesas
    3. Ingredientes de las hamburguesas 
    4. Precio de las hamburguesas
    5. chefs

    (ingrese el numero de la opcion que desee)
    `))
    if(opc3 === 1){
        for(let i = 0; i < hambur.length; i++){
            alert(hambur[i].nombre)
        }
    }
    else if(opc3 === 2){
        for(let i = 0; i < hambur.length; i++){
            alert( hambur[i].categoria)
        }
    }
    if(opc3 === 3){
        for(let i = 0; i < hambur.length; i++){
            alert(hambur[i].ingredientes)
        }
    }
    else if(opc3 === 4){
        for(let i = 0; i < hambur.length; i++){
            alert( hambur[i].precio)
        }
    }
    else if(opc3 === 5){
        for(let i = 0; i < hambur.length; i++){
            alert( hambur[i].chef)
        }
    }


    else if (consulta === 4){
    let opc4 = parseInt(prompt(`
    ==========================
    ======= info chefs ======
    ==========================
    1. Nombre del chef
    2. Especialidad del chef

    (ingrese el numero de la opcion que desee)
    `))
    if(opc4 === 1){
        for(let i = 0; i < chef.length; i++){
            alert(chef[i].nombre)
        }
    }
    else if(opc4 === 2){
        for(let i = 0; i < chef.length; i++){
            alert( chef[i].especialidad)
        }
    }



    } 
}
}