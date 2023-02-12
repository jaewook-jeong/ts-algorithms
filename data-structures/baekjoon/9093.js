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
  let answer = '';
  for (let i = 1; i <= N; i++) {
    const words = input[i].split(" ");
    answer += words.map((word) => word.split("").reverse().join("")).join(" ");
    answer += '\n';
  }
  console.log(answer);
}

// function solution(input) {
//   const N = input.shift();
//   let answer = '';
//   input.forEach((str) => {
//     const arr = str.split(' ');
//     for (let i = 0; i <arr.length ; i++) {
//       arr[i].split('').reverse().forEach((v) => answer += v);
//       answer += ' ';
//     }
//     answer += '\n';
//   });
//   console.log(answer);
// }