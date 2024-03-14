function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
   
 promedio = resultadosTest.reduce (function (acum,valor){
  return(promedio = acum + valor)
})
return promedio/resultadosTest.length;
}

module.exports = promedioResultadosTest;
