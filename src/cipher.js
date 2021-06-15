const cipher = {
  encode: function (string, offset){
    offset = parseInt(offset, 10)
    let result = "", message
   
      for (let i=0; i<string.length; i++){
        if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
          message = (((string.charCodeAt(i)-65)+ offset)%26)+65
          result+=String.fromCharCode(message)
        }
        else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
          message = (((string.charCodeAt(i)-97)+ offset)%26)+97
          result+=String.fromCharCode(message)
        }
        else if (string.charCodeAt(i)===32){
          message = 32
          result+=String.fromCharCode(message)
        }
        else {
          result = "Escreva" 
        }
      }
      return result
  },
  decode: function (string, offset){
    offset = parseInt(offset, 10)
    let result = "", message
    
    for (let i=0; i<string.length; i++){
      if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
        message = (((string.charCodeAt(i)-90)- offset)%26)+90
        result+=String.fromCharCode(message)
      }
      else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
        message = (((string.charCodeAt(i)-122)- offset)%26)+122
        result+=String.fromCharCode(message)
      }
      else if (string.charCodeAt(i)===32){
        message = 32
        result+=String.fromCharCode(message)
      }
      else {
        result = "Escreva" 
      }
    }
    return result
  }
}
export default cipher