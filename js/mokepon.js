function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    let botonMascotaEnemigo = document.getElementById('boton-mascota')

    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonMascotaEnemigo.addEventListener('click',seleccionarMascotaEnemigo)
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
        default :
        alert("ERROR INESPERADO")
        break
    }
}




window.addEventListener('load',iniciarJuego)