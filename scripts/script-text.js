


let topText = document.getElementById("input-top-text")
let bottomText = document.getElementById("input-bottom-text")
let txtSupMeme = document.getElementById("txt-sup")
let txtInfMeme = document.getElementById("txt-inf")
let checkTxtSup = document.getElementById("checkbox-txt-sup")
let checkTxtInf = document.getElementById("checkbox-txt-inf")
let fontSizeInput = document.getElementById("font-size")


        //TEXTO 

// Modificar texto
function changeTopText(){
    txtSupMeme.textContent = topText.value
}
function changeBottomText(){
    txtInfMeme.textContent = bottomText.value
}

topText.addEventListener("input", changeTopText)
bottomText.addEventListener("input", changeBottomText)

// Con o sin texto superior/inferior =====================================================================

function supTxtVisiblility() {
    txtSupMeme = txtSupMeme.style.textContent.hidden
}

checkTxtSup.addEventListener("change", supTxtVisiblility)

        //FUENTE

//Cambiar tamaño txt

function changeFontSizeTop() {
    txtSupMeme.style.fontSize = `${fontSizeInput.value}px`
    txtInfMeme.style.fontSize = `${fontSizeInput.value}px`
}

fontSizeInput.addEventListener("change", changeFontSizeTop)

//Cambiar tipografía txt ===========================================================================


        //COLOR

// Cambio color fondo

let colorPickerFondo = document.getElementById("color-picker-fondo")
let colorPickerColor = document.getElementById("color-picker-color")
let textoSuperior = document.getElementById("txt-sup")
let textoInferior = document.getElementById("txt-inf")
        
function cambiarFondoTexto(){
    textoSuperior.style.backgroundColor = colorPickerFondo.value
    textoInferior.style.backgroundColor = colorPickerFondo.value
}
        
colorPickerFondo.addEventListener("input", cambiarFondoTexto)

// Cambio color texto

function cambiarColorTexto(){
    textoSuperior.style.color = colorPickerColor.value
    textoInferior.style.color = colorPickerColor.value
}

colorPickerColor.addEventListener("input", cambiarColorTexto)

// Fondo transparente

let trasnparentCheck = document.getElementById("checkbox-transparent")

function trasnparentTxt(){
    if (trasnparentCheck.checked = true)
    textoSuperior.style.backgroundColor = "none"
}

trasnparentCheck.addEventListener("click", trasnparentTxt)

