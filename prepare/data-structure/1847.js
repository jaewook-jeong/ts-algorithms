const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const n = input[0];
  const arr = [];
  const stack = [];
  let answer = "";
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  for (let j = 1; j <= n; j++) {
    let count = 1;
    while (count <= n && stack[stack.length - 1] != input[j]) {
      stack.push(arr.shift());
      answer += "+\n";
      count++;
    }
    if (stack[stack.length - 1] == input[j]) {
      stack.pop();
      answer += "-\n";
    } else {
      answer = "NO";
      break;
    }
  }
  console.log(answer);
}
