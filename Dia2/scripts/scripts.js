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





    let opcMenuPrincipal = prompt(`
    ==========================
    ======== consulta ========
    ==========================
    1.Nombre del ingrediente
    2.Descripcion ingrediente 
    3.Precio del ingrediente 
    4.Stock  del ingrediente 
    `)
    if(opcMenuPrincipal == 1){
        for(let i = 0; i < ingredientes.length; i++){
            alert(ingredientes[i].nombre + ingredientes[i].descripcion)
        }
    }
