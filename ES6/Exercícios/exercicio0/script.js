function carregar() {

    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()

    let hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia ! Agora são ${hora} horas.`
        img.src = 'foto manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Bom dia ! Agora são ${hora} horas.`
        img.src = 'foto tarde.png'
        document.body.style.background = '#b9846f'

    } else {
        msg.innerHTML = `Bom dia ! Agora são ${hora} horas.`
        img.src = 'foto noite.png'
        document.body.style.background = '#515154'

    }

}

