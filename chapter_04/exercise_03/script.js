function arrayToList(array) {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }

  return list;
}

function listToArray(list) {
  let array = [];

  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

function prepend(value, list) {
  return { value: value, rest: list };
}

function nth(list, position) {
  if (!list) {
    return undefined;
  } else if (position === 0) {
    return list.value;
  } else {
    return nth(list.rest, position - 1);
  }
}
