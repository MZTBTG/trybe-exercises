function qualEhMenor(array) {
    let menor = 0;
    for(let index in array) {
        if(array[index] < array[menor]) {
            menor = index;
        };
    };
    return menor;
};

let teste = [2, 4, 6, 7, 10, 0, -3];

console.log(qualEhMenor(teste));
