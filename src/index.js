import cipher from './cipher.js';
//console.log(cipher);
//llamar los elementos del html 
const offset = document.getElementById ("offset");
const string = document.getElementById ("string");
const result = document.getElementById ("messageResult");

//poner en mayúsculas el texto al escribir
string.addEventListener("input", function() {
  const text = string.value.toUpperCase();
  string.value = text;
});

//ligar la funcion a mis botones
const encodeButton = document.getElementById ("encodeButton");
encodeButton.addEventListener("click",function () {

  result.innerHTML = cipher.encode(parseInt(offset.value),string.value);
  
})

const decodeButton = document.getElementById ("decodeButton");
decodeButton.addEventListener ("click", function(){

  result.innerHTML = cipher.decode (parseInt(offset.value), string.value);
})

//recargar el sitio 
const goBackButton = document.getElementById("goBack")
goBackButton.addEventListener("click",()=>{
  history.go(0);
});

