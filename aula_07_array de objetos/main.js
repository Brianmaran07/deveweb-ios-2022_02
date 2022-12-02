const alunos = [
    {
        Nome: "lenin",
        Idade: "17 Anos",
        Nota: [9, 6, 8, 7],
        Endereço: {
            Rua: 'Rua da foice e martelo',
            Numero: 200,
            Cidade: 'Moscou',
            Estado: 'u.r.s.s',
        },
        Escola: "Universidade Imperial de São Petersburgo",
        Série: "1° do Ensino Médio",
        Sala: "9",
        Responsavel: "Maria Alexandrovna Blank"
    },
    {
        Nome: "stalin",
        Idade: "15 Anos",
        Nota: [5, 7, 6, 8],
        Endereço: {
            Rua: 'paula souza',
            Numero: 444,
            Cidade: 'São Paulo',
            Estado: 'SP',
        },
        Escola: "antonio sampaio",
        Série: "3° do Ensino Médio",
        Sala: "7",
        Responsavel: "joão bento"

    },
    {
        Nome: "brian",
        Idade: "16 Anos",
        Nota: [10, 7, 9, 6],
        Endereço: {
            Rua: 'av.paulista',
            Numero: 214,
            Cidade: 'São Paulo',
            Estado: 'SP',
        },
        Escola: "antonio lisboa",
        Série: "2° do Ensino Médio",
        Sala: "1",
        Responsavel: "miriam"

    },
];
console.log(alunos);
console.log(alunos[1].texto);
console.log(alunos[2].Nome, alunos[2].Nota, alunos[2].Endereço);