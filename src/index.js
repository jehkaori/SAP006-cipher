import cipher from './cipher.js';

//const botaoCriarmsg = document.getElementById("Iniciar");
//const botaoDecifrarmsg = document.getElementById("Ler mensagem");
//const botaoPag = document.getElementById("Página");
const offsetmsg = document.getElementById("desloc");
//const valor = offsetmsg.options[offsetmsg.selectedIndex].text;
const msgoriginal = document.getElementById("txtoriginal");
const msgcriptada = document.getElementById("txt");
const botaoEncriptar = document.getElementById ("encriptar");
const msgencrip = document.getElementById("txt1")
const msgdecrip = document.getElementById("txt2")
const botaoDecriptar = document.getElementById ("decriptar");

function encrip(){
  const offset = parseInt(offsetmsg.value); 
  const string = msgoriginal.value;
  msgoriginal.value = "";
  msgcriptada.value = cipher.encode(offset, string);
}

botaoEncriptar.addEventListener ("click", encrip);


function decode (){
  const offset = parseInt(offsetmsg.value);
  const string = msgencrip.value;
  msgencrip.value = "";
  msgdecrip.value = cipher.decode(offset,string)
}
botaoDecriptar.addEventListener ("click",decode)

console.log(cipher);