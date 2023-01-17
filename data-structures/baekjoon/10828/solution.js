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


class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this.empty() ? -1: this._arr.pop();
  }
  top() {
    return this.empty() ? -1 : this._arr[this._arr.length - 1];
  }

  empty() {
    return this._arr.length === 0 ? 1 : 0;
  }

  size() {
    return this._arr.length;
  }
}

const solution = (input) => {
  input.shift();
  const stack = new Stack()
  let answer = '';
  input.forEach((v) => {
    const [type, number] = v.split(' ');
    if (type === 'push') {
      stack.push(Number(number));
    } else {
      answer += `${stack[type]()}\n`
    }
  })
  console.log(answer)
}

// 가장 빠른 방법

const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

const stack = []
const logs = []

for (let i = 0; i < arr.length; i++) {
  switch(arr[i]) {
    case 'push':
      stack.push(arr[i + 1])
      break;
    case 'pop':
      stack.length === 0 ? logs.push(-1) : logs.push(stack.pop())
      break;
    case 'top':
      stack.length === 0 ? logs.push(-1) : logs.push(stack[stack.length - 1])
      break;
    case 'size':
      logs.push(stack.length)
      break;
    case 'empty':
      stack.length === 0 ? logs.push(1) : logs.push(0)
      break;
  }
}

console.log(logs.join('\n'));