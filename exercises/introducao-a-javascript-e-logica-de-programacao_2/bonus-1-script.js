let v = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < v.length; i++) {
    for (let j = 0; j < i; j++) {
      if (v[i] < v[j]) {
        let position = v[i];
  
        v[i] = v[j];
        v[j] = position;
      }
    }
  }

console.log('A nova ordem de números são: ' + v);
