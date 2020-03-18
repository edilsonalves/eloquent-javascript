function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));

    if (script) {
      return script.direction;
    } else {
      return 'none';
    }
  }).filter(({ name }) => name !== 'none');

  if (counted.length == 0) {
    return 'ltr';
  }

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}
