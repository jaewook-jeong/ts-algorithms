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
  const length = Number(input[0]);
  const numbers = input[1].split(' ').map((v) => Number(v));
  const indexStack = new Stack();
  const answer = new Array(length).fill(-1);
  for (let i = 0; i < length ; i++) {
    if (numbers[i] < numbers[i+1]) {
      const target = numbers[i+1];
      answer[i] = target;
      while (!indexStack.isEmpty()) {
        if (numbers[indexStack.peek()] < target) {
          answer[indexStack.pop()] = target;
        } else {
          break;
        }
      }
    } else {
      indexStack.push(i);
    }
  }
  console.log(answer.join(' '));
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

  length() {
    return this._arr.length;
  }
}