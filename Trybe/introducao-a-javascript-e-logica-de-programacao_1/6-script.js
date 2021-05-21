let peca = 'ANTOnio';


peca = peca.toLowerCase()

if (peca == 'bispo') {
    console.log(peca + ' se move na diagonal.');
} else if (peca == 'peao') {
    console.log(peca + ' se move para frente.');
} else if (peca == 'cavalo') {
    console.log(peca + ' se move em L.');
} else if (peca == 'torre') {
    console.log(peca + ' se move em cruz, para frente e para os lados.');
} else if (peca == 'rainha') {
    console.log(peca + ' se move em todas as direções, desde que sejam retas.');
} else if (peca == 'rei') {
    console.log(peca + ' se move em todas as direções, uma casa de cada vez.');
} else {
    console.log('Isso não é uma peça de Xadrez!')
};
