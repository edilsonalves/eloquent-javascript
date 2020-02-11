function reverseArray(array) {
  let reverse = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }

  return reverse;
}

function reverseArrayInPlace(array) {
  let reverse = reverseArray(array);

  for (let i = 0; i < reverse.length; i++) {
    array[i] = reverse[i];
  }
}
