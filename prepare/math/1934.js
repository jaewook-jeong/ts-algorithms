const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
function solution(input) {
  let answer = "";
  for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    answer += (a * b) / greatest(a, b);
    answer += "\n";
  }
  console.log(answer);
}

function greatest(x, y) {
  if (y === 0) {
    return x;
  } else {
    return greatest(y, x % y);
  }
}
