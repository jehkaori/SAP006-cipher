const cipher = {
  encode: function encode(offset, string){
    offset = parseInt(offset, 10);
    let result = "", message ;
   
      for (let i=0; i<string.length; i++){
        if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
          message = (((string.charCodeAt(i)-65)+ offset)%26)+65;
          result+=String.fromCharCode(message);
        }
        else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
          message = (((string.charCodeAt(i)-97)+ offset)%26)+97;
          result+=String.fromCharCode(message);
        }
        else if (string.charCodeAt(i)===32){
          message = 32;
          result+=String.fromCharCode(message);
        }
        else if (string.charCodeAt(i)>=33 && string.charCodeAt(i)<=47){
          message = (((string.charCodeAt(i)-33)+ offset)%15)+33;
          result+=String.fromCharCode(message);
        }
        else if (string.charCodeAt(i)>=48 && string.charCodeAt(i)<=57){
          message = (((string.charCodeAt(i)-48)+ offset)%10)+48;
          result+=String.fromCharCode(message);
        }
        else if (string.charCodeAt(i)>=58 && string.charCodeAt(i)<=64){
          message = (((string.charCodeAt(i)-58)+ offset)%7)+58;
          result+=String.fromCharCode(message);
        }
        else if (string.charCodeAt(i)>=128 && string.charCodeAt(i)<=235){
          message = (((string.charCodeAt(i)-128)+ offset)%108)+128;
          result+=String.fromCharCode(message);
        }
        else {
          result = "CARACTER INVÁLIDO";
        }
      }
      return result;
  },
  decode: function decode(offset, string){
    offset = parseInt(offset, 10);
    let result = "", message;
    
    for (let i=0; i<string.length; i++){
      if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
        message = (((string.charCodeAt(i)-90)- offset)%26)+90;
        result+=String.fromCharCode(message);
      }
      else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
        message = (((string.charCodeAt(i)-122)- offset)%26)+122;
        result+=String.fromCharCode(message);
      }
      else if (string.charCodeAt(i)===32){
        message = 32;
        result+=String.fromCharCode(message);
      }
      else if (string.charCodeAt(i)>=33 && string.charCodeAt(i)<=47){
        message = (((string.charCodeAt(i)-47)- offset)%15)+47;
        result+=String.fromCharCode(message);
      }
      else if (string.charCodeAt(i)>=48 && string.charCodeAt(i)<=57){
        message = (((string.charCodeAt(i)-57)- offset)%10)+57;
        result+=String.fromCharCode(message);
      }
      else if (string.charCodeAt(i)>=58 && string.charCodeAt(i)<=64){
        message = (((string.charCodeAt(i)-64)- offset)%7)+64;
        result+=String.fromCharCode(message);
      }
      else if (string.charCodeAt(i)>=128 && string.charCodeAt(i)<=235){
        message = (((string.charCodeAt(i)-235)- offset)%108)+235;
        result+=String.fromCharCode(message);
      }
      else {
        result = "CARACTER INVÁLIDO"; 
      }
    }
    return result;
  }
}
export default cipher;