function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayDuplicado = []
  for (i=0; i < array.length ; i++){
  arrayDuplicado.push(array[i]*2);
} return arrayDuplicado;
}

module.exports = duplicarElementos;
