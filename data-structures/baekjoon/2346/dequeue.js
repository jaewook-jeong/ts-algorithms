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

const solution = (input) => {
  const deque = [];
  const length = Number(input[0]);
  const hint = input[1].split(' ').map((v) => Number(v));
  const answer = [1];
  for (let i = 1 ; i <= length ; i++) {
    deque.push(i);
  }
  const first = deque.shift();
  let check = hint[first-1];
  while (!!deque.length) {
    if (check > 0) {
      const count = Math.abs(hint[first-1]) - 1;
      for (let i = 0 ; i <count ; i++) {
          const a = deque.shift();
          deque.push(a);
      }
    } else {
      const count = Math.abs(hint[first-1]);
      for (let i = 0 ; i <count ; i++) {
        const a = deque.pop();
        deque.unshift(a);
      }
    }
    const a = deque.shift();
    answer.push(a);
    check = hint[a-1];
  }
  console.log(answer.join(' '));
}