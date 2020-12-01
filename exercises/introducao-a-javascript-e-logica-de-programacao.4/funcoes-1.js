function ehPalindromo(word) {
  let numbers = 0;
  let verify = false;
  if(word.length % 2 === 0) {
    numbers = word.length / 2
  } else {
    numbers = (word.length - 1) / 2;
  }
   
  for(let index = 0; index < numbers; index += 1) {
      if(word[index] === word[word.length - 1 - index]) {
          verify = true;
      } else {
          verify = false;
      };
  };
  if(verify === true) {
      console.log('E um palíndromo!')
  } else {
      console.log('Não é um palíndromo!')
  }
};

ehPalindromo('kaiak')
