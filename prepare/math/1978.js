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
  const arr = input[1].split(' ').map(Number);
  function isPrime(n) {
    if (n === 1) return false;
    for (let j = 2; j <= Math.sqrt(n); j++) {
      if (n % j === 0) return false;
    }
    return true;
  }
  console.log(arr.filter((v) => isPrime(v)).length);
}
