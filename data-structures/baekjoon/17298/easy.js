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
  const answer = [];
  const length = Number(input.shift());
  const numbers = input[0].split(' ').map((v) => Number(v));
  for (let i = 0; i< length ; i++) {
    const target = numbers[i];
    let check = false;
    for (let j = i+1; j < length ; j++) {
      if (target < numbers[j]) {
        answer.push(numbers[j]);
        check = true;
        break;
      }
    }
    if (!check) answer.push(-1);
  }
  console.log(answer.join(' '));
}
