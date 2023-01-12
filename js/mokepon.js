function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    if(document.getElementById('hipodoge').checked){
        alert("SELECCIONASTE A HIPODOGE")
    } else if (document.getElementById('capipepo').checked){
        alert("SELECCIONASTE A CAPIPEPO")
    } else if(document.getElementById('ratigueya').checked){
        alert("SELECCIONASTE A RATIGUEYA")
    }
}




window.addEventListener('load',iniciarJuego)