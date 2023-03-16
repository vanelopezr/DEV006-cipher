const cipher = {

  encode: (inputMessage, offset) => {
    const messageValue = inputMessage.value;
    const offsetValue = offset.value;
    let result = "";
    for (let i = 0; i < messageValue.length; i++) {
      const asciiPosition = messageValue[i].charCodeAt();
      if (asciiPosition >= 65 && asciiPosition <= 90) {
        const asciiTxt = (((asciiPosition - 65 + parseInt(offsetValue)) % 26) + 65);
        result += String.fromCharCode(asciiTxt);
      }
    }
    return result;
  },

  decode: (inputMessage, offset) => {
    const messageValue = inputMessage.value;
    const offsetValue = offset.value;
    let result = "";
    for (let i = 0; i < messageValue.length; i++) {
      const asciiPosition = messageValue[i].charCodeAt();
      if (asciiPosition >= 65 && asciiPosition <= 90) {
        result += String.fromCharCode(((asciiPosition - 65 - parseInt(offsetValue) + 26) % 26) + 65);
      } else {
        result += messageValue[i];
      }
    }
    return result;
  }

}

export default cipher;
