let n = 5;

for(let linha = 0; linha < n; linha += 1) {
    let resultado = '';
    for(let coluna = 0; coluna < n; coluna += 1){
        if(resultado.length + linha < resultado.length + coluna || 
           resultado.length + linha < resultado.length + n - 1 - coluna){
            resultado += ' ';
        } else {resultado += '*'};
    };
    console.log(resultado);
};
