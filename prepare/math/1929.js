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
  const [n, m] = input[0].split(" ").map((item) => +item);
  const prime = { 1: true };

  for (let i = 2; i <= Math.sqrt(m); i++) {
    if (prime[i]) continue;
    for (let j = i ** 2; j <= m; j += i) {
      prime[j] = true;
    }
  }
  const results = [];

  for (let i = n; i <= m; i++) {
    if (!prime[i]) results.push(i);
  }
  console.log(results.join("\n"));
}
