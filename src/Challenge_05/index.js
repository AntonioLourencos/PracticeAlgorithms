function makeArrayConsecutive2(statues) {
  statues = statues.sort((a, b) => a - b);
  return statues[statues.length - 1] - statues[0] + 1 - statues.length;
}

const statues = [6, 2, 3, 8];

console.log(makeArrayConsecutive2(statues));
