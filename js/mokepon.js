function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
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
        alert('SELECCIONASTE A HIPODOGE')
    } else if (imputCapipepo.checked){
        spanMascotaJugador.innerHTML= 'Capipepo'
        alert('SELECCIONASTE A CAPIPEPO')
    } else if(imputRatigueya.checked){
        spanMascotaJugador.innerHTML= 'Raigueya'
        alert('SELECCIONASTE A RATIGUEYA')
    } else if(imputLangostelvis.checked){
        spanMascotaJugador.innerHTML= 'Langostelvis'
        alert('SELECCIONASTE LANGOSTELVIS')
    } else if (imputTucapalma.checked){
        spanMascotaJugador.innerHTML= 'Tucapalma'
        alert('SELEECCIONASTE A TUCAPALMA')
    } else if (imputPydos.checked){
        spanMascotaJugador.innerHTML= 'Pydos'
        alert('SELECCIONASTE PYDOS')
    } else{
        alert('SELECCIONA UNA MASCOTA POR FAVOR')
    }
}




window.addEventListener('load',iniciarJuego)