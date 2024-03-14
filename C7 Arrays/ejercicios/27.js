function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var frase = palabras.reduce (function (string,string2)
  { return string+" "+string2})
  return frase;
}

module.exports = dePalabrasAFrase;
