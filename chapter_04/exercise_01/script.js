function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let number = start; number <= end; number += step) {
      array.push(number);
    }
  } else {
    for (let number = start; number >= end; number += step) {
      array.push(number);
    }
  }

  return array;
}

function sum(numbers) {
  let total = 0;

  for (let value of numbers) {
    total += value;
  }

  return total;
}
