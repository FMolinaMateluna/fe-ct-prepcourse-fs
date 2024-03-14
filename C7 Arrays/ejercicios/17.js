function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
 
var suma = arrayOfNums.reduce (function (numero,valor){
  return numero + valor
},0) 
return suma;
}

module.exports = agregarNumeros;
