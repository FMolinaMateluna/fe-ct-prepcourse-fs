function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

 numPares = array.filter(function (numero)
 {return (numero % 2 === 0);})
  return numPares;
}

module.exports = filtrarNumerosPares;
