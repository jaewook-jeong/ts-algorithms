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
  const arr = input[0].split(/(\<[a-z\s]+\>)/g);
  const stack = [];
  const answer = [];
  for (let i = 0; i <arr.length ; i++) {
    const target = arr[i];
    if (target !== '') {
      if (target[0] === '<') {
        answer.push(target);
      } else {
        const tempArr = target.split(' ');
        tempArr.forEach((v) => {
          answer.push(v.split('').reverse().join(''));
          answer.push(' ');
        })
        answer.pop();
      }
    }
  }
  console.log(answer.join(''))
}