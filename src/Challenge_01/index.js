// Instructions on Readme.md

function centuryFromYear(year) {
  let century = 0;
  while (year > 0) {
    year = year - 100;
    century++;
  }
  return century;
}
