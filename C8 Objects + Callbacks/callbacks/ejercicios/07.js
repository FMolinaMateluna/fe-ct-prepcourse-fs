function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var palabras = arrayOfStrings.filter (function (strings){
      return (strings [0]== "a")
   }) 
   return palabras;
}

module.exports = filter;
