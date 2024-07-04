

// MODIFICAR CONTENIDO TEXTOS

let topText = document.getElementById("input-top-text")
let bottomText = document.getElementById("input-bottom-text")
let txtSupMeme = document.getElementById("txt-sup")
let txtInfMeme = document.getElementById("txt-inf")

function changeTopText() {
    txtSupMeme.textContent = topText.value
}
function changeBottomText() {
    txtInfMeme.textContent = bottomText.value
}

topText.addEventListener("input", changeTopText)
bottomText.addEventListener("input", changeBottomText)

// BOTON CON O SIN TEXTO

let checkTxtSup = document.getElementById("checkbox-txt-sup")
let checkTxtInf = document.getElementById("checkbox-txt-inf")

function supTxtVisiblility() {
    if (checkTxtSup.checked) {
        txtSupMeme.style.display = "none"
    } else { txtSupMeme.style.display = "inline" }
}
checkTxtSup.addEventListener("click", supTxtVisiblility)

function infTxtVisiblility() {
    if (checkTxtInf.checked) {
        txtInfMeme.style.display = "none"
    } else { txtInfMeme.style.display = "inline" }
}
checkTxtInf.addEventListener("click", infTxtVisiblility)

//FONT SIZE

let fontSizeInput = document.getElementById("font-size")

function changeFontSizeTop() {
    txtSupMeme.style.fontSize = `${fontSizeInput.value}px`
    txtInfMeme.style.fontSize = `${fontSizeInput.value}px`
}
fontSizeInput.addEventListener("input", changeFontSizeTop)

// TEXT ALIGN

let alinearIzquierda = document.getElementById("alinear-izquierda")
let alinearCentro = document.getElementById("alinear-centro")
let alinearDerecha = document.getElementById("alinear-derecha")

function alinearTextoIzquierda(event) {
    txtSupMeme.style.textAlign = "left"
    txtInfMeme.style.textAlign = "left"
}
alinearIzquierda.addEventListener("click", alinearTextoIzquierda)

function alinearTextoCentro(event) {
    txtSupMeme.style.textAlign = "center"
    txtInfMeme.style.textAlign = "center"
}
alinearCentro.addEventListener("click", alinearTextoCentro)

function alinearTextoDerecha(event) {
    txtSupMeme.style.textAlign = "right"
    txtInfMeme.style.textAlign = "right"
}
alinearDerecha.addEventListener("click", alinearTextoDerecha)

// COLOR FONDO TEXTO

let colorPickerFondo = document.getElementById("color-picker-fondo")
let colorPickerColor = document.getElementById("color-picker-color")

function cambiarFondoTexto() {
    txtSupMeme.style.backgroundColor = colorPickerFondo.value
    txtInfMeme.style.backgroundColor = colorPickerFondo.value
}

colorPickerFondo.addEventListener("input", cambiarFondoTexto)

// Cambio color texto

function cambiarColorTexto() {
    txtSupMeme.style.color = colorPickerColor.value
    txtInfMeme.style.color = colorPickerColor.value
}

colorPickerColor.addEventListener("input", cambiarColorTexto)

// FONDO TRANSPARENTE

let trasnparentCheck = document.getElementById("checkbox-transparent")

function trasnparentTxt() {
    if (trasnparentCheck.checked) {
        txtSupMeme.style.backgroundColor = "transparent";
        txtInfMeme.style.backgroundColor = "transparent";
    } else { txtSupMeme.style.backgroundColor = colorPickerFondo.value; txtInfMeme.style.backgroundColor = colorPickerFondo.value }

}
trasnparentCheck.addEventListener("click", trasnparentTxt)

//ESPACIADO

let espaciado = document.getElementById("espaciado")

function cambiarEspaciado(event){
    let numEspaciado = event.target.value
    txtSupMeme.style.paddingTop = `${numEspaciado}px` 
    txtSupMeme.style.paddingBottom = `${numEspaciado}px` 
    txtInfMeme.style.paddingTop = `${numEspaciado}px` 
    txtInfMeme.style.paddingBottom = `${numEspaciado}px` 
}
espaciado.addEventListener("input", cambiarEspaciado)

//INTERLINEADO

let interlineado = document.getElementById("interlineado")

function cambiarInterlinea(event){
    let valorInterlinea = event.target.value
    txtSupMeme.style.lineHeight = valorInterlinea
    txtInfMeme.style.lineHeight = valorInterlinea
}
interlineado.addEventListener("change", cambiarInterlinea)

//FONT FAMILY 

let contenedorMeme = document.getElementById("contenedor-txt-img")
let fontType = document.getElementById("font-type")

function cambiarFuente(event){
    let fuenteSeleccionada = event.target.value;
    console.log(fuenteSeleccionada)
    contenedorMeme.style.fontFamily = fuenteSeleccionada
}
fontType.addEventListener("input", cambiarFuente)

// CONTONO ####################################################

let contornoNinguno = document.getElementById("contorno-ninguno")
let contornoClaro = document.getElementById("contorno-claro")
let contornoOscuro = document.getElementById("contorno-oscuro")

function addContOscuro() {
    txtSupMeme.style.webkitTextStroke = "black 3px";
}

contornoNinguno.addEventListener("click", sinControrno)
contornoClaro.addEventListener("click", addContClaro)
contornoOscuro.addEventListener("click", addContOscuro)
