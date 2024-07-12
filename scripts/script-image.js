

//cambio light-dark HAY QUE VERLO ===========================================================================

let displayButton = document.getElementById("display-button")
let body = document.getElementById("body")

function cambiarDisplay() {
    body.classList.toggle("light-mode");
    displayButton.style.display = "flex";
    if(body.classList.contains("light-mode")){
        displayButton.innerHTML = "<p><i class='fa-solid fa-lightbulb'></i><p>Modo Oscuro</p>"
    } else {displayButton.innerHTML = "<p><i class='fa-solid fa-lightbulb'></i><p>Modo Claro</p>"}
}
displayButton.addEventListener("click", cambiarDisplay)

//displayButton.innerHTML = "<p><i class='fa-solid fa-lightbulb'></i><p>Modo Claro</p>"





// CAMBIO ASIDES
let asideImg = document.getElementById("aside-img")
let asideTxt = document.getElementById("aside-txt")

let navButtonImg = document.getElementById("nav-img")
let navButtonTxt = document.getElementById("nav-txt")

function openAsideImg() {
    asideImg.style.zIndex = 2
    asideTxt.style.zIndex = 1
}

function openAsideTxt() {
    asideImg.style.zIndex = 1
    asideTxt.style.zIndex = 2
}

navButtonImg.addEventListener("click", openAsideImg)
navButtonTxt.addEventListener("click", openAsideTxt)


// CAMBIO COLOR FONDO

let colorPicker = document.getElementById("color-picker")
let contImgMeme = document.getElementById("cont-img-meme")

function cambiarFondo() {
    contImgMeme.style.backgroundColor = colorPicker.value
}

colorPicker.addEventListener("input", cambiarFondo)


// CARGAR IMAGEN MEME

let imgMeme = document.getElementById("cont-img-meme")
let urlInput = document.getElementById("url-input")

function cargaImg(event) {
    imgMeme.style.backgroundImage = `url(${urlInput.value})`
}

urlInput.addEventListener("input", cargaImg)

//MODOS DE FUSIÓN

let selectorModoFusion = document.getElementById("pic-modo-fusion")
let modoFusionNinguno = document.getElementById("ninguno")
let modoFusionAclarar = document.getElementById("aclarar")
let modoFusionOscurecer = document.getElementById("oscurecer")
let modoFusionDiferencia = document.getElementById("diferencia")
let modoFusionLuminosidad = document.getElementById("luminosidad")
let modoFusionMultiplicar = document.getElementById("multiplicar")


function cambioModoFusion(event) {
    let modoFusionSeleccionado = event.target.value
    imgMeme.style.backgroundBlendMode = modoFusionSeleccionado
}

selectorModoFusion.addEventListener("input", cambioModoFusion)

//FILTROS

let brillo = document.getElementById("brillo")
let opacidad = document.getElementById("opacidad")
let contraste = document.getElementById("contraste")
let desenfoque = document.getElementById("desenfoque")
let grices = document.getElementById("grices")
let sepia = document.getElementById("sepia")
let tonalidad = document.getElementById("tonalidad")
let saturacion = document.getElementById("saturacion")
let negativo = document.getElementById("negativo")

function cambiarBrillo(event) {
    let valorBrillo = event.target.value
    imgMeme.style.filter = `brightness(${valorBrillo})`
}
brillo.addEventListener("input", cambiarBrillo)

function cambiarOpacidad(event) {
    let valorOpacidad = event.target.value
    imgMeme.style.filter = `opacity(${valorOpacidad})`
}
opacidad.addEventListener("input", cambiarOpacidad)

function cambiarContraste(event) {
    let valorContraste = event.target.value
    imgMeme.style.filter = `contrast(${valorContraste})`
}
contraste.addEventListener("input", cambiarContraste)

function cambiarDesenfoque(event) {
    let valorDesenfoque = event.target.value
    imgMeme.style.filter = `blur(${valorDesenfoque}px)`
}
desenfoque.addEventListener("input", cambiarDesenfoque)

function cambiarGrices(event) {
    let valorGrices = event.target.value
    imgMeme.style.filter = `grayscale(${valorGrices})`
}
grices.addEventListener("input", cambiarGrices)

function cambiarSepia(event) {
    let valorSepia = event.target.value
    imgMeme.style.filter = `sepia(${valorSepia})`
}
sepia.addEventListener("input", cambiarSepia)

function cambiarSaturacion(event) {
    let valorSaturacion = event.target.value
    imgMeme.style.filter = `saturate(${valorSaturacion})`
}
saturacion.addEventListener("input", cambiarSaturacion)

function cambiarTonalidad(event) {
    let valorTonalidad = event.target.value
    imgMeme.style.filter = `hue-rotate(${valorTonalidad}deg)`
}
tonalidad.addEventListener("input", cambiarTonalidad)

function cambiarNegativo(event) {
    let valorNegativo = event.target.value
    imgMeme.style.filter = `invert(${valorNegativo})`
}
negativo.addEventListener("input", cambiarNegativo)

//REESTABLECER FILTROS

let reestablecerButton = document.getElementById("reestablecer-filtros")

function reestablecerFiltros() {
    brillo.value = "1"
    opacidad.value = "1"
    contraste.value = "1"
    desenfoque.value = "0"
    grices.value = "0"
    sepia.value = "0"
    saturacion.value = "1"
    tonalidad.value = "1"
    negativo.value = "0"
    imgMeme.style.filter = "none"
    imgMeme.style.backgroundBlendMode = ""
    imgMeme.style.backgroundColor = "#000000"
    colorPicker.value = "#FFFFFF"
}

reestablecerButton.addEventListener("click", reestablecerFiltros)


//DESCARGAR IMAGEN

let botonDescargarMeme = document.getElementById("descargar-meme")

function descargarMeme() {
    domtoimage.toBlob(contenedorMeme).then(function (blob) {
        saveAs(blob, "mi-meme.png")
    })
}

botonDescargarMeme.addEventListener("click", descargarMeme)