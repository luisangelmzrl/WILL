/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function buscarAmigo(amigos, nombre) {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

  // Tu código aca:
  var ObjAmigo = {};
  console.log("AMIGOS => " +  amigos);
  amigos.forEach(function(amigo) {
    console.log(amigo.nombre + " " + amigo.edad);
    if(amigo.nombre===nombre){
      ObjAmigo = amigo;
    }
  });
  console.log("AMIGO ENCONTRADO => " +  ObjAmigo.nombre + " - " + ObjAmigo.edad);
  return ObjAmigo;
}

// No modifiques nada debajo de esta linea //

module.exports = buscarAmigo