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
  const array = input[1].split(' ').map((v) => Number(v));
  const target = input[3].split(' ').map((v) => Number(v));
  let count = 0;
  array.forEach((v) => {
    if (target.includes(v)) {
      count++;
    }
  });
  console.log(count);
}
