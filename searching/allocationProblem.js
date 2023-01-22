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
  let i = 1;
  const [n, k] = input.shift().split(' ');
  while (true) {
    const res = a(i, Number(k));
    if (res) {
      break;
    } else {
      i++;
    }
  }

  console.log(i);
}

function a (max, n) {
  let res = false;
  let count = 1;
  let now = 0;
  let i = 0
  for (; i < input.length ; i++) {
    const v = Number(input[i]);
    if (v > max) {
      break;
    } else {
      if (now + v <= max) {
        now += v;
      } else {
        now = v;
        count++;
      }
    }
  }
  if (i === input.length) {
    res = true;
  }
  return res && n >= count;
}

// 이진트리 나머지 공부