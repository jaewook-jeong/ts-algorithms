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
  const stack = new Stack();
  const arr = input[0].split('');
  for (let i = 0; i < arr.length ; i++) {
    const v = arr[i];
    if (v === '(') {
      stack.push(v);
    } else if (v === ')') {
      const before = stack.peek();
      if (before === '(') {
        stack.pop();
        stack.push(2);
      } else if (!isNaN(before)) {
        let count = 0;
        while (!stack.isEmpty()) {
          if (!isNaN(stack.peek())) {
            count += stack.pop();
          } else {
            break;
          }
        }
        if (stack.peek() !== '(') {
          break;
        }
        stack.pop();
        stack.push(count * 2);
      } else {
        break;
      }
    } else if (v === '[') {
      stack.push(v);
    } else {
      const before = stack.peek();
      if (before === '[') {
        stack.pop();
        stack.push(3);
      } else if (!isNaN(before)) {
        let count = 0;
        while (!stack.isEmpty()) {
          if (!isNaN(stack.peek())) {
            count += stack.pop();
          } else {
            break;
          }
        }
        if (stack.peek() !== '[') {
          break;
        }
        stack.pop();
        stack.push(count * 3);
      } else {
        break;
      }
    }
  }
  const answer = stack.reduce();
  console.log(isNaN(answer) ? 0 : answer);
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

  reduce() {
    return this._arr.reduce((p, c) => p + c, 0);
  }

  clear() {
    return this._arr = [];
  }
}