function countBs(string) {
  return countChar(string, 'B');
}

function countChar(string, character) {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      counter += 1;
    }
  }

  return counter;
}
