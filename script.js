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
// Aguarda a página carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    carregarBolosSalvos();

    // Seleciona todos os campos que possuem a propriedade 'contenteditable'
    const elementosEditaveis = document.querySelectorAll('[contenteditable="true"]');

    // Adiciona um evento para salvar sempre que o usuário terminar de digitar/editar
    elementosEditaveis.forEach((elemento, index) => {
        elemento.addEventListener("blur", () => {
            salvarBolos();
        });
    });
});

// Função para salvar os dados no localStorage do navegador
function salvarBolos() {
    const dadosBolos = [];
    const cards = document.querySelectorAll('.bolo-card');

    cards.forEach((card) => {
        const nome = card.querySelector('.nome-bolo').innerText;
        const valor = card.querySelector('.valor').innerText;
        
        dadosBolos.push({ nome, valor });
    });

    // Converte o array de objetos para uma string JSON e salva
    localStorage.setItem('receitasBolos', JSON.stringify(dadosBolos));
}

// Função para recuperar os dados salvos quando a página abrir
function carregarBolosSalvos() {
    const dadosSalvos = localStorage.getItem('receitasBolos');

    if (dadosSalvos) {
        const dadosBolos = JSON.parse(dadosSalvos);
        const cards = document.querySelectorAll('.bolo-card');

        cards.forEach((card, index) => {
            if (dadosBolos[index]) {
                card.querySelector('.nome-bolo').innerText = dadosBolos[index].nome;
                card.querySelector('.valor').innerText = dadosBolos[index].valor;
            }
        });
    }
}