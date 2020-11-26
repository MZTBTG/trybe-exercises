let v = [5, 3, 2, 4, 7, 1, 0, 6];
let multi = [];

for (let i = 1; i < v.length; i++) {
    multi.push(v[i] * v[i-1])
};

console.log('O novo array que contém os valores multiplicados possui os seguintes valores: ' + multi);
