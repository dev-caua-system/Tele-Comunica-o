```javascript
const formulario = document.querySelector(".message-form");
const botao = document.querySelector(".button");

formulario.addEventListener("submit", function () {
    botao.textContent = "Enviando...";
    botao.disabled = true;
});
```
