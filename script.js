// ============================
// ACCORDION
// ============================

document.querySelectorAll(".accordion-btn")
.forEach(botao => {

botao.addEventListener("click", () => {

const conteudo =
botao.nextElementSibling;

if(conteudo.style.display === "block"){
conteudo.style.display = "none";
}
else{
conteudo.style.display = "block";
}

});

});

// ============================
// ACESSIBILIDADE
// ============================

let tamanhoFonte = 16;

const body = document.body;

document
.getElementById("aumentarFonte")
.addEventListener("click", () => {

tamanhoFonte += 2;
body.style.fontSize = tamanhoFonte + "px";

});

document
.getElementById("diminuirFonte")
.addEventListener("click", () => {

tamanhoFonte -= 2;
body.style.fontSize = tamanhoFonte + "px";

});

document
.getElementById("toggleTema")
.addEventListener("click", () => {

body.classList.toggle("dark");

});

// ============================
// LEITURA POR VOZ
// ============================

let fala;

document
.getElementById("lerConteudo")
.addEventListener("click", () => {

const texto =
document.getElementById("conteudoPrincipal")
.innerText;

fala =
new SpeechSynthesisUtterance(texto);

fala.lang = "pt-BR";

speechSynthesis.speak(fala);

});

document
.getElementById("pararLeitura")
.addEventListener("click", () => {

speechSynthesis.cancel();

});

// ============================
// COMENTÁRIOS
// ============================

document
.getElementById("enviarComentario")
.addEventListener("click", () => {

const comentario =
document.getElementById("comentario");

if(comentario.value.trim() !== ""){

alert("Comentário enviado!");

comentario.value = "";

}

});