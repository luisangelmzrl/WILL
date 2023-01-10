/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]
  Array.prototype.filtrar = function(funcion){  //Funcion que se agregará al prototipo general de la clase Array
    var ArrayR = [];
    var c;
    console.log("THIS => ");
    console.log(this)
    for(c=0;c<this.length;c++){  //se usa this como el objeto que se recibe ya que no sabemos el nombre
      if(funcion(this[c])){
        ArrayR.push(this[c]);
      }
    }
    return ArrayR;
  }
};

// No modifiques nada debajo de esta linea //

module.exports = filtrar