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
  const [_, routerCount] = input.shift().split(' ').map(Number);
  input.sort((a, b) => Number(a) - Number(b));

  let left = 1;
  let right = Number(input[input.length - 1]);
  let answer = 0;

  while (left <= right) {
    const distance = Math.floor((left + right) / 2);
    let count = 1;
    let targetX = input[0];

    for (let i = 0; i < input.length; i++) {
      if (input[i] - targetX >= distance) {
        targetX = input[i];
        count++;
      }
    }
    if (count >= routerCount) {
      answer = distance;
      left = distance + 1;
    } else {
      right = distance - 1;
    }
  }
  console.log(answer);
}
