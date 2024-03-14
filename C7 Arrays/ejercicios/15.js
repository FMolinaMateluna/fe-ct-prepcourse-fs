function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var mayor = 0;
  for (i=1; i < array.length ; i++)
  if (array.length[i] > array[mayor]) {
    mayor = i;
  }return mayor;
}

module.exports = encontrarIndiceMayor;
