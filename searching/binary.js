const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {
    solution(input);
    process.exit();
  });
function solution(input) {
  const array = input[1].split(' ');
  const target = input[3].split(' ');

  console.log(target.reduce((previousValue, currentValue) => {
    const a = binary(array, currentValue);
    return a + previousValue;
  }, 0))
}

function binary(array, target) {
  let left = 0;
  let right = array.length;

  while (left < right) {
    const mid = Math.floor((right+left) / 2);
    if (array[mid] === target) {
      return 1;
    } else if (array[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return 0;
}
