function darkmode(){
    document.body.classList.toggle('dark')
}

function mascara_endereco() {
    var endereco = document.getElementById("endereco");
    var endereco_formatado = endereco.value.replace(/\s*,\s*/g, ", ");
    var separador_numero = endereco_formatado.lastIndexOf("-");

    if (separador_numero !== -1) {
        var rua = endereco_formatado.slice(0, separador_numero).trim();
        var numero = endereco_formatado.slice(separador_numero + 1).trim();
        endereco_formatado = rua + " - " + numero;
    }

    endereco.value = endereco_formatado;
}

function mascara_telefone() {
    var telefone = document.getElementById("telefone");
    var digitos = telefone.value.replace(/\D/g, "").slice(0, 11);
    var telefone_formatado = digitos;

    if (digitos.length > 0 && digitos.length <= 2) {
        telefone_formatado = "(" + digitos;
    } else if (digitos.length > 2) {
        telefone_formatado = "(" + digitos.slice(0, 2) + ") " + digitos.slice(2);
    }

    if (digitos.length > 3) {
        telefone_formatado = "(" + digitos.slice(0, 2) + ") " +
            digitos[2] + " " + digitos.slice(3);
    }

    if (digitos.length > 7) {
        telefone_formatado = "(" + digitos.slice(0, 2) + ") " +
            digitos[2] + " " + digitos.slice(3, 7) + "-" + digitos.slice(7);
    }

    telefone.value = telefone_formatado;
}

document.getElementById("endereco").addEventListener("input", mascara_endereco);
document.getElementById("telefone").addEventListener("input", mascara_telefone);

