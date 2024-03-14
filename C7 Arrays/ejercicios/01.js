function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
  var elemento = ""; 
  for (i=array.length-1; i >= 0 ;i--){
  elemento = (array[i]);
  } return elemento;  
}

module.exports = devolverPrimerElemento;
