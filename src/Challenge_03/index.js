function adjacentElementsProduct(inputArray) {
  let i = 0;
  let value;

  while (i < inputArray.length) {
    let expression = inputArray[i] * inputArray[i + 1];
    if (i === 0 || expression > value) {
      value = value = expression;
    }
    i++;
  }
  return value;
}

inputArray = [-23, 4, -3, 8, -12];
console.log(adjacentElementsProduct(inputArray));
