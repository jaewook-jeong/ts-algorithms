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
  const [A, B] = input[0].split(' ').map(Number);
  let i = A;
  let j = B;
  while (i % j !== 0) {
    let n = i % j;
    if (n !== 0) {
      i = j;
      j = n;
    }
  }
  console.log(j)
  console.log(A*B/j)
}