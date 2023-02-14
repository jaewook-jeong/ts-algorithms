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
  const N = Number(input[0]);
  let answer = [];
  for (let i = 1; i <= N ; i++) {
    const stack = new Stack();
    const arr = input[i].split('');
    let j = 0;
    for (; j < arr.length ; j++) {
      const s = arr[j];
      if (s === '(') {
        stack.push(s);
      } else if (s === ')') {
        if (stack.isEmpty() || stack.peek() !== '(') {
          break;
        }
        stack.pop();
      }
    }
    if (j === arr.length && stack.isEmpty()) {
      answer.push('YES');
    } else {
      answer.push('NO');
    }
  }
  console.log(answer.join('\n'));
}

class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }

  isEmpty() {
    return this._arr.length === 0;
  }
}