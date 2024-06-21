
//cambio light-dark HAY QUE VERLO ===========================================================================

let displayMode = document.getElementById("dark-mode")
let nav = document.getElementsByTagName("nav")
let body = document.getElementsByTagName("body")




// cambio de asides
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


// cambio color fondo texto

let colorPicker = document.getElementById("color-picker")
let contImgMeme = document.getElementById("cont-img-meme")

function cambiarFondoTexto(){
    contImgMeme.style.backgroundColor = colorPicker.value
}

colorPicker.addEventListener("input", cambiarFondoTexto)


// CARGAR IMAGEN

let imgMeme = document.getElementById("cont-img-meme")
let urlInput = document.getElementById("url-input")

function cargaImg(event){
    imgMeme.style.backgroundImage = `url(${urlInput.value})`
}

urlInput.addEventListener("input", cargaImg)

//FILTROS NO FUNCA #####################################

let brillo = document.getElementById("brillo") 
let opacidad = document.getElementById("opacidad")
let contraste = document.getElementById("contraste")
let desenfoque = document.getElementById("desenfoque")
let grices = document.getElementById("grices")
let sepia = document.getElementById("sepia")
let tonalidad = document.getElementById("tonalidad")
let saturacion = document.getElementById("saturacion")
let negativo = document.getElementById("negativo")

function cambiarBrillo(event){
    let valorBrillo = event.target.value
    imgMeme.style.filter = `brightness(${valorBrillo})`
}
brillo.addEventListener("input", cambiarBrillo)

function cambiarOpacidad(event){
    let valorOpacidad = event.target.value
    imgMeme.style.filter = `opacity(${valorOpacidad})`
}
opacidad.addEventListener("input", cambiarOpacidad)

function cambiarContraste(event){
    let valorContraste = event.target.value
    imgMeme.style.filter = `contrast(${valorContraste})`
}
contraste.addEventListener("input", cambiarContraste)

function cambiarDesenfoque (event) {
    let valorDesenfoque = event.target.value
    imgMeme.style.filter = `blur(${valorDesenfoque}px)`
}
desenfoque.addEventListener("input", cambiarDesenfoque)

function cambiarGrices(event){
    let valorGrices = event.target.value
    imgMeme.style.filter = `grayscale(${valorGrices})`
}
grices.addEventListener("input", cambiarGrices)


function cambiarSepia(event){
    let valorSepia = event.target.value
    imgMeme.style.filter = `sepia(${valorSepia})`
}
sepia.addEventListener("input", cambiarSepia)

function cambiarTonalidad(event){
    let valorTonalidad = event.target.value
    imgMeme.style.filter = `hue-rotate(${valorTonalidad}deg)`
}
tonalidad.addEventListener("input", cambiarTonalidad)

function cambiarSaturacion(event){
    let valorSaturacion = event.target.value
    imgMeme.style.filter = `saturate(${valorSaturacion})`
}
saturacion.addEventListener("input", cambiarSaturacion)

function cambiarNegativo(event){
    let valorNegativo = event.target.value
    imgMeme.style.filter = `invert(${valorNegativo})`
}
negativo.addEventListener("input", cambiarNegativo)