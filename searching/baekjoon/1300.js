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
  const N = Number(input[0]);
  const Index = Number(input[1]);
  function binary_search(left, right) {
    console.log({ left: left, right: right });
    if(left > right) return left;

    let mid = (left + right) / 2;
    let cnt = 0;

    for(let i = 1; i <= N; i++) {
      cnt += N > mid / i ?  Math.floor(mid / i) : N;
    }
    console.log(cnt, Index);
    if(cnt < Index) return binary_search(mid + 1, right);
    else return binary_search(left, mid - 1);
  }
  console.log(binary_search(1, Index));
}