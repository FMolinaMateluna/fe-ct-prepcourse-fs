function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  numGrandes = array.filter(function (numero)
  {return (numero > 10);})
   return numGrandes.length;
}

module.exports = contarElementosMayoresA10;
