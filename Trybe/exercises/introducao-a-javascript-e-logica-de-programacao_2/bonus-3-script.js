let v = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multi = [];

for (let i = 1; i < v.length; i++) {
    multi.push(v[i] * v[i-1])
};

console.log('O novo array que contém os valores multiplicados possui os seguintes valores: ' + multi);
