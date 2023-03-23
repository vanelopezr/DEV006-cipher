const cipher = {

  encode: (offset, string) => {
    //declarar varible para el resultado
    let result = "";
    //typeError para ingresar caracteres válidos.
    if (typeof offset !== "number" || typeof string !== "string") {
      throw  TypeError ("Ingrese caracteres válidos"); }
    //iterar en cada letra y obtener el número ascii
    for (let i = 0; i < string.length; i++) {
      const asciiPosition = string[i].charCodeAt();
      //verificar que ascii position este entre las mayusculas.
      if (asciiPosition >= 65 && asciiPosition <= 90) {
        //aplicar la formula en el numero ascii con el offset
        const asciiTxt = (((asciiPosition - 65 + offset) % 26) + 65);
        //devolver un string obteniendo el nuevo numero ascii con la formula
        result += String.fromCharCode(asciiTxt);
        //agregar los espacios
      } else if (asciiPosition === 32) { 
        result += " ";
      }
    }
    return result;
  },

  decode: (offset, string) => {
    let result = "";
    if (typeof offset !== "number" || typeof string !== "string") {
      throw  TypeError ("Ingrese caracteres válidos"); }
    for (let i = 0; i < string.length; i++) {
      const asciiPosition = string[i].charCodeAt();
      if (asciiPosition >= 65 && asciiPosition <= 90) {
        result += String.fromCharCode((((asciiPosition - 65 - offset + 26)+26) % 26) + 65);
      } else if (asciiPosition === 32) { 
        result += " ";    
      } else {
        result += string[i];
      }
    }
    return result;
  }

}
export default cipher;
