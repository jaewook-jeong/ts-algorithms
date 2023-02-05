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
// 200 19
// 1 19 => 20 * 9 + 10
// 12345678910 => 55 / 60,
// 1234 12 => count보다 남은 sum으 ㅣ수가 같거나 많으면 쉽게처리
// 1234567  28 35

function solution(input) {
  let count = 0;
  let sum = 0;
  const targetSum = input[0];
  let now = 1;
  while (true) {
    const remainSum = targetSum - sum;
    if (targetSum === sum || remainSum <= count) {
      break;
    } else {
      count++;
      sum += now;
      now++;
    }
  }
  console.log(count);
}