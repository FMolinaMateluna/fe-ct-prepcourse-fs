function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:

   for (i=0; i < array.length ; i++){
      if (num === array[i]) return i;
   } 
   return -1;
   
}

module.exports = encontrarElemento;
