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

// 5
// 3 2 1 -3 -1
// 0 0 0  0  0
function solution(input) {
  const length = Number(input[0]);
  const hint = input[1].split(' ').map((v) => Number(v));
  const balloons = new Array(length).fill(0);
  balloons[0] = 1;
  const answer = [1];
  let count = hint[0]; // 3
  let j = 0;
  for (let i = 1 ; i < length ; i ++) {
    while (true) {
      if (count > 0) {
        if (typeof balloons[j+1] === 'number') {
          if (!balloons[j+1]) {
            count--;
          }
          j++;

        } else {
          j = 0;
        }
      } else if (count < 0) {
        if (typeof balloons[j-1] === 'number') {
          if (!balloons[j-1]) {
            count++;
          }
          j--;
        } else {
          j = length-1;
        }
      } else {
        balloons[j] = 1;
        answer.push(j+1);
        count = hint[j];
        break;
      }
    }
  }
  console.log(answer.join(' '));
}
