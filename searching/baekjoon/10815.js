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
  const havaing = new Set(input[1].split(' '));
  const targets = input[3].split(' ');
  const result = [];
  for(const target of targets) {
    havaing.has(target) ?
      result.push(1) :
      result.push(0);
  }
  console.log(result.join(' '));
}