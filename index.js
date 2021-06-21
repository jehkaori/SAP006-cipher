import cipher from './cipher.js';

const offsetmsg = document.getElementById("desloc");
const msgoriginal = document.getElementById("txtoriginal");
const botaoEncriptar = document.getElementById("encriptar");
const msgcriptada = document.getElementById("txtcodificado");
const botaoDecriptar = document.getElementById("decriptar");
const botaolimpar = document.getElementById("btn")

function encrip(){
  const offset = parseInt(offsetmsg.value); 
  const string = msgoriginal.value;
  msgoriginal.value = "";
  msgcriptada.value = cipher.encode(offset, string);
  alert("Não esqueça de enviar o deslocamento que foi utilizado para criptografar a mensagem juntamente com a mensagem criptogarafada. Pois ele é necessário para fazer a descriptografia da mensagem, caso contrário a mensagem não será descriptografada da maneira correta.")
}
botaoEncriptar.addEventListener ("click",encrip);

function decrip (){
  const offset = parseInt(offsetmsg.value);
  const string = msgcriptada.value;
  msgcriptada.value = "";
  msgoriginal.value = cipher.decode(offset,string);
}
botaoDecriptar.addEventListener("click",decrip);

function limpar(){
  msgoriginal.value = ""
  msgcriptada.value = ""
}
botaolimpar.addEventListener("click",limpar)