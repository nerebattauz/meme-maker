//DOM

// NAV BUTTONS
let navButtonImg = document.getElementById("nav-img")
let navButtonTxt = document.getElementById("nav-txt")
let displayButton = document.getElementById("display-button")
//MAIN ELEMENTS
let body = document.getElementById("body")
let contTxtImg = document.getElementById("contenedor-txt-img")
let contImgMeme = document.getElementById("cont-img-meme")
let botonDescargarMeme = document.getElementById("descargar-meme")
 //ASIDE ELEMENTS
let urlInput = document.getElementById("url-input")
let asideImg = document.getElementById("aside-img")
let asideTxt = document.getElementById("aside-txt")
let colorPicker = document.getElementById("color-picker")
let selectorModoFusion = document.getElementById("pic-modo-fusion")
let reestablecerButton = document.getElementById("reestablecer-filtros")


//------------------------------------------------------------------------------------


// MODO OSCURO / MODO CLARO
function cambiarDisplay() {
    body.classList.toggle("light-mode");
    displayButton.style.display = "flex";
    if(body.classList.contains("light-mode")){
        displayButton.innerHTML = "<p><i class='fa-solid fa-lightbulb'></i><p>Modo Oscuro</p>"
    } else {displayButton.innerHTML = "<p><i class='fa-solid fa-lightbulb'></i><p>Modo Claro</p>"}
}
displayButton.addEventListener("click", cambiarDisplay)

// CAMBIO ASIDES
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
function cambiarFondo() {
    contTxtImg.style.backgroundColor = colorPicker.value
}
colorPicker.addEventListener("input", cambiarFondo)


// CARGAR IMAGEN MEME
function cargaImg(event) {
    contTxtImg.style.backgroundImage = `url(${urlInput.value})`
}
urlInput.addEventListener("input", cargaImg)

//MODOS DE FUSIÓN
function cambioModoFusion(event) {
    let modoFusionSeleccionado = event.target.value
    contTxtImg.style.backgroundBlendMode = modoFusionSeleccionado
}
selectorModoFusion.addEventListener("input", cambioModoFusion)

//FILTROS
function cambiarBrillo(event) {
    let valorBrillo = event.target.value
    contTxtImg.style.filter = `brightness(${valorBrillo})`
}
brillo.addEventListener("input", cambiarBrillo)

function cambiarOpacidad(event) {
    let valorOpacidad = event.target.value
    contTxtImg.style.filter = `opacity(${valorOpacidad})`
}
opacidad.addEventListener("input", cambiarOpacidad)

function cambiarContraste(event) {
    let valorContraste = event.target.value
    contTxtImg.style.filter = `contrast(${valorContraste})`
}
contraste.addEventListener("input", cambiarContraste)

function cambiarDesenfoque(event) {
    let valorDesenfoque = event.target.value
    contTxtImg.style.filter = `blur(${valorDesenfoque}px)`
}
desenfoque.addEventListener("input", cambiarDesenfoque)

function cambiarGrices(event) {
    let valorGrices = event.target.value
    contTxtImg.style.filter = `grayscale(${valorGrices})`
}
grices.addEventListener("input", cambiarGrices)

function cambiarSepia(event) {
    let valorSepia = event.target.value
    contTxtImg.style.filter = `sepia(${valorSepia})`
}
sepia.addEventListener("input", cambiarSepia)

function cambiarSaturacion(event) {
    let valorSaturacion = event.target.value
    contTxtImg.style.filter = `saturate(${valorSaturacion})`
}
saturacion.addEventListener("input", cambiarSaturacion)

function cambiarTonalidad(event) {
    let valorTonalidad = event.target.value
    contTxtImg.style.filter = `hue-rotate(${valorTonalidad}deg)`
}
tonalidad.addEventListener("input", cambiarTonalidad)

function cambiarNegativo(event) {
    let valorNegativo = event.target.value
    contTxtImg.style.filter = `invert(${valorNegativo})`
}
negativo.addEventListener("input", cambiarNegativo)

//REESTABLECER FILTROS
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
    contTxtImg.style.filter = "none"
    contTxtImg.style.backgroundBlendMode = ""
    contTxtImg.style.backgroundColor = "#000000"
    colorPicker.value = "#FFFFFF"
}
reestablecerButton.addEventListener("click", reestablecerFiltros)

//DESCARGAR IMAGEN
function descargarMeme() {
    domtoimage.toBlob(contenedorMeme).then(function (blob) {
        saveAs(blob, "mi-meme.png")
    })
}
botonDescargarMeme.addEventListener("click", descargarMeme)