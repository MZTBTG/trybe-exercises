let salarioBruto = 3000.00;
let inss;
let ir;

if (salarioBruto <= 1556.94 && salarioBruto > 0) {
    inss = 0.08 * salarioBruto; 
} else if ( salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    inss = 0.09 * salarioBruto;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    inss = 0.11 * salarioBruto; 
} else if (salarioBruto > 5189.82) {
    inss = 570.88; 
} else {
    inss = undefined;
    console.log("Erro ao calcular INSS: Entrada inválida.");
};

let salarioDeduzido = salarioBruto - inss;

if (salarioDeduzido <= 1903.98 && salarioDeduzido > 0) {
    ir = 0; 
} else if ( salarioDeduzido > 1903.98 && salarioDeduzido <= 2826.65) {
    ir = (0.075 * salarioDeduzido) - 142.80;
} else if (salarioDeduzido > 2826.65 && salarioDeduzido <= 3751.05) {
    ir = (0.15 * salarioDeduzido) - 354.80; 
} else if ( salarioDeduzido > 3751.05 && salarioDeduzido <= 4664,68) {
    ir = (0.225 * salarioDeduzido) - 636.13;
} else if ( salarioDeduzido > 4664,68) {
    ir = (0.275 * salarioDeduzido) - 869.36;
} else {
    ir = undefined;
    console.log("Erro ao calcular IR: Entrada inválida.")
};

let salarioLiquido = salarioDeduzido - ir;

console.log(salarioLiquido)
