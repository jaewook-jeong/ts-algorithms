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
  let right = 1;
  for (let i = 1; i<=input ; i++) {
    const temp = right;
    right += left
    left = temp;
  }
  console.log(left);
}