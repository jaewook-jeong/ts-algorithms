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

function solution(arg) {
  const answer = [0, 0, 0];
  const N = Number(arg.shift());
  const paper = arg.map((p) => p.split(' ').map(Number));
  function recursion(n, x, y) {
    const target = paper[y][x];
    let count = 0;
    for (let i = 0 ; i < n ; i++) {
      for (let j = 0 ; j < n ; j++) {
        if (paper[y+j][x+i] === target) count++;
        else break;
      }
    }
    if (count === n*n) {
      answer[target + 1]++;
    }
    else {
      n /= 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          recursion(n, x+i*n, y+j*n);
        }
      }
    }
  }
  recursion(N, 0, 0);
  console.log(answer.join('\n'));
}
