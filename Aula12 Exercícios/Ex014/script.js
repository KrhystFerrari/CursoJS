function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 20
msg.innerHTML = `<p>Agora são ${hora} horas. </p>`

if (hora >= 0 && hora < 12) {
    //hora.innerHTML = 'Bom dia!'
    img.src = 'manhã.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18) {
    //hora.innerHTML = 'Boa tarde!'
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
} else {
    //hora.innerHTML = 'Boa noite!'
    img.src = 'noite.png'
    document.body.style.background = '#515154'
}
}
