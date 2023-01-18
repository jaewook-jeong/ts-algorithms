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
  const array = input[1].split(' ');
  const target = input[3].split(' ');
  console.log(target.reduce((previousValue, currentValue) => {
    const a = sentinel(array, currentValue);
    return previousValue + a;
  }, 0));
}

function sentinel(_arr, key) {
  const arr = [..._arr, key];
  let i = 0;
  while (true) {
    if (arr[i] === key) break;
    i++;
  }
  return i === arr.length ? 0 : 1;
}