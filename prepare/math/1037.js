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
  const arr = input[1].split(' ').map(Number).sort((a, b) => a-b);
  const firstNum = Number(arr[0]);
  const lastNum = Number(arr[arr.length-1]);
  let result = 0;

  arr.length>=2?result =  firstNum*lastNum : result = firstNum*firstNum
  console.log(result)
}