/**
 *  Funciones en arrays
 *  Autor:Leon-Avalos
 *  13/01/2019 
 */



var canasta = [
    { nombre: "leche", precio: 9000, categoría: "lácteos,refrigeracion" },
    {nombre: "cerveza", precio: 21000, categoría: "refrigeracion" },
    { nombre: "whisky", precio: 3000, categoría: "licores" },
    { nombre: "Vodka", precio: 3200, categoría: "licores" },

]

/**
 *  Añade un producto a la canasta
 * @param {*} nombre nombre del producto
 * @param {*} precio precio del producto
 * @param {*} categoria categoria(s) del producto
 */
function addProduct(nombre, precio, categoria){
    canasta.push({nombre, precio, categoria})
}

/**
 * Elimina un producto de la canasta
 * @param {*} nombre nombre del producto a eliminar
 */
function deleteProduct(nombre){
    index = canasta.findIndex(producto => producto.nombre == nombre)
    canasta.splice(index, 1)
}

/**
 * Filtra todos los productos que pertenezcan a una categoria
 * @param {*} categoria categoria que desea filtrar
 */
function filterByCategory(categoria){
    return canasta.filter(producto => producto.categoría == categoria)
}

/**
 * Ordena los elementos de la canasta 
 */
function sortByPrice(){
    return canasta.sort((a, b) => a.precio - b.precio)
}


