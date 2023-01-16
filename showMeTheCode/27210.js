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
    input = input[1].split(' ');
    console.log(Math.max(solution({'1': 1, '2': -1}), solution({ '1': -1, '2': 1 })));
    process.exit();
  });

function solution(mapping) {
  let cnt = 0;
  let ret = 0;
  input.forEach((v) => {
    cnt += mapping[v];
    cnt = Math.max(0, cnt);
    ret = Math.max(cnt, ret);
  });
  return ret;
}