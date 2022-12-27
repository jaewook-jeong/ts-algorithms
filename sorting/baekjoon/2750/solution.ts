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
function solution(array: number[]) {
  const n = array.shift();
  for (let i = 0 ; i < n ; i++) {
    for (let j = i + 1; j > 0 ; j--) {
      if (array[j] < array[j-1]) {
        const temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp;
      }
    }
  }
  array.forEach((v) => console.log(v));
}
