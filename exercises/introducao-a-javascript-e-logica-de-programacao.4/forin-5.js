let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
};

info['recorrente'] = 'sim';
info2['recorrente'] = 'sim';

for(let index in info) {
    console.log(info[index] + ' e ' + info2[index]);
}
