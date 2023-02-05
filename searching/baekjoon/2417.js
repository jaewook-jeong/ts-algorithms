const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
  input.push(Number(line));
})
  .on('close', function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  let left = 0;
  let right = input[0];
  let answer = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const result = Math.pow(mid, 2);
    if (result >= input[0]) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(answer);
}