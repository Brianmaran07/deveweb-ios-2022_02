/*criando array unidimensional*/
var array1 = ['marcelo', 15, 'colin', 47, true];
console.log(array1);
array1[3] = 80;
console.log(array1);
/*array bidimensional*/
var array2 = [
    ['pipoca,10, false'],
    ['string', 20, true][('margariana', 12, false)],
];

console.log(array2);
console.log(array2[2][0]);
console.clear();
array2[1][0] = 'salsicha';
console.log(array2);

console.log(array1[3]) 


var x =array1.toString();
console.log(typeof x)
console.log(typeof array1)
console.log(x)

console.clear();
/*array de objeto carro*/
var carro = ['uno', 1998, '0km', false, 2];
var x = console.log(typeof x);
console.log(typeof carro);
console.log(x);

console.clear();
var y = carro.join('?');
console.log(carro);
console.log(x);
console.log(y);

console.log(carro.length);

console.clear();
var t = carro.pop();
console.log(t);

/*metodo uma infrmação do array*/
console.clear();
var u = carro.push("lego");
console.log(carro)
console.log(u)
/*metodo shift remove o elemento no inicio da array*/
console.clear()
var p =carro.shift()
console.log(carro)
console.log(p)
/* adiciona a informação no inicio do array metodo unshift*/
console.clear()
var w = carro.unshift(console.log)
console.log(carro)
console.log(w)
/*comando delete apaga um elemento array em uma posição pré selecionada*/
delete carro[1]
console.log(carro)