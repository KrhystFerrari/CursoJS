var num = [5, 8, 2, 9, 3]  //Array ou vetor
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições. `)
console.log(`O primeiro valor do vetor é ${num[0]} `)

var pos = num.indexOf(8)  //Caso retorne '-1' quer dizer q o valor não foi encontrado
if (pos == -1) {
    console.log('O valor não foi encontrado! ')
} else {
    console.log(`O valor 8 está na posição ${pos} `)
}
