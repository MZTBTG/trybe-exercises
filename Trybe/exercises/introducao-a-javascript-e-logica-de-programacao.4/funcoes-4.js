function qualEhAMaiorPalavra(array) {
    let maior = '';
    for(let index in array) {
        if(array.length[index] > array.length[maior]) {
            console.log(array.length[index])
            maior = index;
        } else {
            console.log(array[index])
        }
    };
    return maior;
};

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(qualEhAMaiorPalavra(teste));
