function qualEhMaior(array) {
    let maior = 0;
    for(let index in array) {
        if(array[index] > array[maior]) {
            maior = index;
        };
    };
    return maior;
};

let teste = [2, 3, 6, 7, 10, 1];

console.log(qualEhMaior(teste));
