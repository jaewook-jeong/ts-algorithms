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

// n A q m(i)
function solution(input) {
  const arr = input[1].split(' ').map(Number);
  const target = input[3].split(' ').map(Number);
  function solve(i, m) {
    if(m === 0) return 1;
    if(i >= arr.length) return 0;
    return solve(i + 1, m) || solve(i + 1, m - arr[i]);
  }
  for (let i = 0; i < Number(input[2]) ; i++) {
    if (solve(0, target[i])) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }
}