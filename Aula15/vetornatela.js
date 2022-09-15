var valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}. `)
}
*/

for (var pos in valores) {  //Uso do 'in'
    console.log(`A posição ${pos} tem o valor ${valores[pos]}. `)
}
