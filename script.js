/* ======================================== */
/* ACCORDION */
/* ======================================== */

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {

    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

  });
});

/* ======================================== */
/* MODO ESCURO/CLARO */
/* ======================================== */

const themeButton = document.getElementById("toggle-theme");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

/* ======================================== */
/* CONTROLE DE FONTE */
/* ======================================== */

let currentFontSize = 100;

const increaseFontBtn = document.getElementById("increase-font");
const decreaseFontBtn = document.getElementById("decrease-font");

increaseFontBtn.addEventListener("click", () => {
  currentFontSize += 10;
  document.body.style.fontSize = currentFontSize + "%";
});

decreaseFontBtn.addEventListener("click", () => {
  currentFontSize -= 10;

  if (currentFontSize < 70) {
    currentFontSize = 70;
  }

  document.body.style.fontSize = currentFontSize + "%";
});

/* ======================================== */
/* LEITURA POR VOZ */
/* ======================================== */

const readButton = document.getElementById("read-page");
const stopButton = document.getElementById("stop-reading");

let speech;

readButton.addEventListener("click", () => {

  const mainContent = document.getElementById("main-content");

  const text = mainContent.innerText;

  speech = new SpeechSynthesisUtterance(text);

  speech.lang = "pt-BR";
  speech.rate = 1;

  window.speechSynthesis.speak(speech);

});

stopButton.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

/* ======================================== */
/* FORMULÁRIO */
/* ======================================== */

const form = document.querySelector(".modern-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Inscrição realizada com sucesso!");
});

/* ======================================== */
/* COMENTÁRIOS */
/* ======================================== */

const commentButton = document.querySelector(".comments-container button");

commentButton.addEventListener("click", () => {

  const textarea = document.querySelector("textarea");

  if (textarea.value.trim() === "") {
    alert("Digite um comentário antes de enviar.");
    return;
  }

  alert("Comentário enviado com sucesso!");
  textarea.value = "";

});