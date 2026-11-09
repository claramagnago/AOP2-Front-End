const formulario = document.getElementById("formulario-contato");
const aviso = document.getElementById("aviso-sucesso");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    aviso.hidden = false;
    formulario.reset();

    setTimeout(function () {
        aviso.hidden = true;
    }, 5000);
});