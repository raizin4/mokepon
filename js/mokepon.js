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

    if(imputHipodoge.checked){
        alert("SELECCIONASTE A HIPODOGE")
    } else if (imputCapipepo.checked){
        alert("SELECCIONASTE A CAPIPEPO")
    } else if(imputRatigueya.checked){
        alert("SELECCIONASTE A RATIGUEYA")
    } else if(imputLangostelvis.checked){
        alert('SELECCIONASTE LANGOSTELVIS')
    } else if (imputTucapalma.checked){
        alert('SELEECCIONASTE A TUCAPALMA')
    } else if (imputPydos.checked){
        alert('SELECCIONASTE PYDOS')
    } else{
        alert('SELECCIONA UNA MASCOTA POR FAVOR')
    }
}




window.addEventListener('load',iniciarJuego)