import cipher from './cipher.js';
//console.log(cipher);
const offset = document.getElementById ("offset");
const inputMessage = document.getElementById ("inputMessage");
const result = document.getElementById ("messageResult");

const encodeButton = document.getElementById ("encodeButton");
encodeButton.addEventListener("click",function () {

  result.innerHTML = cipher.encode(inputMessage, offset);
  
})

const decodeButton = document.getElementById ("decodeButton");
decodeButton.addEventListener ("click", function(){

  result.innerHTML = cipher.decode (inputMessage, offset);
})