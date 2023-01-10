/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true
  // Tu código:
  var numr;
  var numcad ="";
  numcad = num.toString();    //Convertir un número a string
  numcad = numcad.split("");  //Separar la cadena en cada elemento
  numcad = numcad.reverse();  //invierte la cadena
  numcad = numcad.join("");   //Vuelve a unir los elementos en una sola cadena
  numr = parseInt(numcad);    //Convertir string a número
  console.log("NRO. INCIAL   => " + num);
  console.log("NRO. AL REVÉS => " + numr);
  if(num===numr){
    //Si se lee igual al derecho y al revés
    return true;
  }
  else{
    //No se lee igual al derecho y al revés
    return false;
  }

}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico