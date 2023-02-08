const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
  input.push(Number(line));
})
  .on('close', function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  const len = input.shift();

  for (let i = 0; i < len; i++) {
    let oneCount = 0, zeroCount = 1;

    for (let j = 1; j <= input[i]; j++) {
      const tmpCount = zeroCount;

      zeroCount = oneCount;
      oneCount = tmpCount + oneCount;
    }

    console.log(zeroCount + " " + oneCount);
  }
}