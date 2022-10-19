// while
let contador = 1;
while (contador <= 50) {
    console.log(`Valor = ${contador}`);
    contador++;
}


// do-while
console.clear();
let i = 10,
    text = '';
do {
    text += `O número é ${i}\n`;
    i--;
} while (i >= 0);
console.log(text);

for (let pares = 0)
    console.log(`números pares: ${pares}`);