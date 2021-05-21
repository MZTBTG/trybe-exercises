let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for(let fator = 0; fator < numbers.length; fator += 1) {
   total += numbers[fator];
};


console.log('A média de todos os números é ' + (total / numbers.length) + '!');
