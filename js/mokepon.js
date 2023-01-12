function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
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
    alert(ataqueJugador)
}

function ataqueAgua(){
    ataqueJugador='AGUA'
    alert(ataqueJugador)
}

function ataqueTierra(){
    ataqueJugador='TIERRA'
    alert(ataqueJugador)
}

let ataqueJugador = 0




window.addEventListener('load',iniciarJuego)