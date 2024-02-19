// Seleccionar elementos del DOM
var botonEncriptar = document.querySelector(".Btn-Encriptar");
var botonDesencriptar = document.querySelector(".Btn-Desencriptar");
var imagen = document.querySelector(".Contenedor_Imagen");
var contenedor = document.querySelector(".Contenedor_Parrafo");
var resultado = document.querySelector(".Texto_Resultado");

// Asignar eventos a los botones
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

// Función para encriptar texto
function encriptar() {
    ocultarContenedor();
    var ContenedorTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(ContenedorTexto);
    document.querySelector(".ContenedorTexto").value = ""; // Limpiar el área de texto
    document.querySelector(".ContenedorTexto").setAttribute("placeholder", "Ingrese texto"); // Restaurar el placeholder

}


function desencriptar() {
    ocultarContenedor();
    var ContenedorTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(ContenedorTexto);
    document.querySelector(".ContenedorTexto").value = ""; // Limpiar el área de texto
    document.querySelector(".ContenedorTexto").setAttribute("placeholder", "Ingrese texto"); // Restaurar el placeholder

}


function recuperarTexto() {
    var ContenedorTexto = document.querySelector(".ContenedorTexto");
    return ContenedorTexto.value;
}


function ocultarContenedor() {
    imagen.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}


function encriptarTexto(mensaje) {
    var textoFinal = "";

    for (var i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case 'a':
                textoFinal += 'ai';
                break;
            case 'e':
                textoFinal += 'enter';
                break;
            case 'i':
                textoFinal += 'imes';
                break;
            case 'o':
                textoFinal += 'ober';
                break;
            case 'u':
                textoFinal += 'ufat';
                break;
            default:
                textoFinal += mensaje[i];
                break;
        }
    }

    return textoFinal;
}

// Función para desencriptar texto
function desencriptarTexto(mensaje) {
    var textoFinal = "";

    for (var i = 0; i < mensaje.length; i++) {
        switch (mensaje.substring(i, i + 2)) {
            case 'ai':
                textoFinal += 'a';
                i++;
                break;
            case 'en':
                textoFinal += 'e';
                i += 4;
                break;
            case 'im':
                textoFinal += 'i';
                i += 3;
                break;
            case 'ob':
                textoFinal += 'o';
                i += 3;
                break;
            case 'uf':
                textoFinal += 'u';
                i += 3;
                break;
            default:
                textoFinal += mensaje[i];
                break;
        }
    }

    return textoFinal;
}

// Asignar evento al botón de copiar
const btnCopiar = document.querySelector(".Btn_Copiar");
btnCopiar.addEventListener("click", function() {
    var contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
});
