var agora = new Date()  //Comando usado para usar a hora atual do cliente.
var hora = agora.getHours()

console.log(`Agora são ${hora} horas. `)
if (hora > 5 && hora < 12) {
    console.log('Bom dia! ')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde! ')
} else if (hora > 18 && hora < 23){
    console.log('Boa noite! ')
} else {
    console.log('Boa madrugada! ')
}