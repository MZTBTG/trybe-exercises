let n = 7;

for(let linha = 0; linha <= n; linha += 1) {
    let resultado = '';
    for(let coluna = 0; coluna = n; coluna += 1){
        if(resultado.length + linha !== resultado.length - 1 + coluna && 
           resultado.length + linha !== resultado.length + n - coluna || 
           linha < n / 2 - 1){
            resultado += ' ';
        } else {resultado += '*'};
    };
    console.log(resultado);
};
