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
  if (input === 0) return console.log(1);
  let answer = 1;
  for (let i = 1; i<=input ; i++) {
    answer *= i;
  }
  console.log(answer);
}