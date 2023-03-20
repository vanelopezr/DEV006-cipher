const cipher = {

  encode: (offset, string) => {
    //obtener los valores
    let result = "";
    if (typeof offset !== "number" || typeof string !== "string") {
      throw  TypeError ("Ingrese caracteres válidos"); }
    //iterar en cada letra y obtener el número ascii
    for (let i = 0; i < string.length; i++) {
      const asciiPosition = string[i].charCodeAt();
      if (asciiPosition >= 65 && asciiPosition <= 90) {
        //aplicar la formula
        const asciiTxt = (((asciiPosition - 65 + offset) % 26) + 65);
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
