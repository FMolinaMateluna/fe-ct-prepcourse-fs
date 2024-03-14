function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesAño = array.filter (function (meses){
    if (meses === "Enero" || meses === "Marzo" || meses === "Noviembre")
  return meses})
    if (mesAño.length !== 3) {
      return "No se encontraron los meses pedidos";
    }
    return mesAño;
  }


module.exports = mesesDelAño;
