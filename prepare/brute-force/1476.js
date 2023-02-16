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
  const [E, S, M] = input[0].split(' ').map(Number);

  let count = 1;
  while (true) {
    if (
      (count - E) % 15 === 0 &&
      (count - S) % 28 === 0 &&
      (count - M) % 19 === 0
    ) {
      console.log(count);
      break;
    }
    count++;
  }
}
