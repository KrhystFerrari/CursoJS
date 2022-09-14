var idade = 67

console.log(`Você tem ${idade} anos! `)
if (idade < 16) {
    console.log('Não pode votar! ')
} else  if (idade < 18) {
        console.log('Voto opcional! ')
    } else if (idade >= 18 && idade < 65) {
        console.log('Pode votar! ')
    } else {
        console.log('Voto volta a ser opcional (67 anos ou mais). ')
    }