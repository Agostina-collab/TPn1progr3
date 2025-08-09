let productos= [
    {id:0,
    nombre:`Cuadernola`,
    precio: 2800,
    stock: 50,
    },
    
    {id:1,
    nombre:`Mapas`,
    precio: 1500,
    stock: 10,
    },
    

    {id:2,
    nombre:`Cartuchera`,
    precio: 15000,
    stock: 8,
    },

    {id:3,
    nombre:`Lapices de colores`,
    precio: 1800,
    stock: 10,
    },

    {id:4,
    nombre:`Borratinta`,
    precio: 1600,
    stock: 0,
    },
]
//Operaciones Basicas y acceso.
console.log(`Hay ${productos.length} productos en el array.`);

console.log(productos[1].nombre);
console.log(productos[3].nombre);

//Recorrido del Array
for (let p of productos){
    console.log(p.nombre);
    console.log(p.precio);    
}

productos.forEach(productos =>{
    console.log(`Productos: ${productos.nombre}, Precio: ${productos.precio}`);
});

//Manipulacion de Arrays
productos.push(`Regla`,`Goma`);
console.log(productos);

productos.pop();
console.log(productos);

productos.unshift(`Tijeras`);
console.log(productos);

productos.shift();
console.log(productos);

//Creacion del nuevo array.

//Los productos donde el stock sea mayor a 0
let productosConStock= productos.filter(producto=> producto.stock >0);
console.log(productosConStock);

let nombresProductos = productos.map(productos=> productos.nombre);
console.log(nombresProductos);

const nombreProductos= productos.map(producto=>{
    return{
        nombre:producto.nombre,
    }
});

let idBuscar= 3;
let productoEncontrado = productos.find(producto=> producto.id === idBuscar);
if (productoEncontrado){
    console.log(`ID si existe: ${productoEncontrado.id}`);
}else{
    console.log(`No existe ese ID`);
}

let productosOrdenados= [...productos];
productosOrdenados.sort((a,b)=> a.precio - b.precio);
console.log(`Productos ordenados por precio: ${productosOrdenados.productos}`);



