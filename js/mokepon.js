function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let btnReiniciar = document.getElementById('boton-reiniciar')
    btnReiniciar.addEventListener('click',reiniciar)

}

function seleccionarMascotaJugador(){
    let imputHipodoge = document.getElementById('hipodoge')
    let imputCapipepo = document.getElementById('capipepo')
    let imputRatigueya= document.getElementById('ratigueya')
    let imputLangostelvis= document.getElementById('langostelvis')
    let imputTucapalma= document.getElementById('tucapalma')
    let imputPydos= document.getElementById('pydos')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(imputHipodoge.checked){
        spanMascotaJugador.innerHTML= 'Hipodoge'
    } else if (imputCapipepo.checked){
        spanMascotaJugador.innerHTML= 'Capipepo'
    } else if(imputRatigueya.checked){
        spanMascotaJugador.innerHTML= 'Raigueya'
    } else if(imputLangostelvis.checked){
        spanMascotaJugador.innerHTML= 'Langostelvis'
    } else if (imputTucapalma.checked){
        spanMascotaJugador.innerHTML= 'Tucapalma'
    } else if (imputPydos.checked){
        spanMascotaJugador.innerHTML= 'Pydos'
    } else{
        alert('SELECCIONA UNA MASCOTA POR FAVOR')
    }

    seleccionarMascotaEnemigo()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*( max - min + 1) + min)
}

function seleccionarMascotaEnemigo(){
    let eleccionEnemigo = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    switch(eleccionEnemigo){
        case 1 :
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        break
        case 2 :
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        break
        case 3 :
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        break
        case 4 :
        spanMascotaEnemigo.innerHTML= 'Langostelvis'
        break
        case 5 :
        spanMascotaEnemigo.innerHTML= 'Tucapalma'
        break
        case 6 : 
        spanMascotaEnemigo.innerHTML='Pydos'
        break
        default :
        alert("ERROR INESPERADO")
        break
    }
}

function ataqueFuego(){
    ataqueJugador='FUEGO'
    atqJugador = 1
    atqAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador='AGUA'
    atqJugador = 2
    atqAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador='TIERRA'
    atqJugador = 3
    atqAleatorioEnemigo()
}

function atqAleatorioEnemigo(){
    let eleeccion = aleatorio(1,3)
    switch(eleeccion){
        case 1 :
        ataqueEnemigo = 'FUEGO'
        atqEnemigo = 1
        break
        case 2 :
        ataqueEnemigo = 'AGUA'
        atqEnemigo = 2
        break
        case 3 :
        ataqueEnemigo = 'TIERRA'
        atqEnemigo = 3
        break
        default :
        alert("ERROR INESPERADO")
        break
    }
    elegirGanador()
    return ataqueEnemigo
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML=' Tu mascota atacó con '+ataqueJugador+'\n La mascota enemiga atacó con '+ ataqueEnemigo+'\n '+resultado

    sectionMensajes.appendChild(parrafo)
}

function elegirGanador(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    switch (atqJugador - atqEnemigo){
        case 0 : 
        crearMensaje('EMPATE') 
        break
        case 1 :
        crearMensaje('GANASTE')
        vidasEnemigo--
        break
        case -2 :
        crearMensaje('GANASTE')
        vidasEnemigo--
        break
        default :
        crearMensaje('PERDISTE')
        vidasJugador--
        break
    }

    spanVidasEnemigo.innerHTML = vidasEnemigo
    spanVidasJugador.innerHTML = vidasJugador

    revisarVidas()
}


function revisarVidas (){
    if(vidasEnemigo === 0 ){
        ganador = true
        crearMensajeFinal('FELICITACIONES GANASTE 🎉🎉🎉')
    } else if (vidasJugador === 0){
        ganador = true
        crearMensajeFinal('PERDISTE ☹😔😖')
    }
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML= resultadoFinal

    sectionMensajes.appendChild(parrafo)
}

function reiniciar(){

   location.reload()
    
}

let ataqueJugador = ""
let ataqueEnemigo = ""
let atqJugador = 0
let atqEnemigo = 0
let ganador = false
let vidasJugador = 3
let vidasEnemigo = 3




window.addEventListener('load',iniciarJuego)