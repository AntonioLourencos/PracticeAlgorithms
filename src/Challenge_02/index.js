function checkPalindrome(value) {
  let word = String();
  for (let index = value.length - 1; index >= 0; index--) {
    word = word += value[index];
  }

  if (word === value) {
    return true;
  }
  return false;
}
