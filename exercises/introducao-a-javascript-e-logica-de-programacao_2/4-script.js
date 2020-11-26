let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for(let fator = 0; fator < numbers.length; fator += 1) {
   total += numbers[fator];
};

let media = total / numbers.length;

if (media > 20) {
    console.log('O valor da média é maior que 20.')
} else {
    console.log('O valor da média é menor ou igual a 20.')
};
