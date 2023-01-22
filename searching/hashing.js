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

/*
* 6
* insert AAA
* insert AAC
* find AAA
* find CCC
* insert CCC
* find CCC
* */
function solution(input) {
  let answer = '';
  const dict = {};
  for (let i = 1 ; i < Number(input[0]) + 1; i ++ ) {
    const [method, value] = input[i].split(' ');
    if (method === 'find') {
      if (dict[value]) {
        answer += 'yes\n';
      } else {
        answer += 'no\n';
      }
    } else if (method === 'insert') {
      dict[value] = true;
    }
  }
  console.log(answer);
}

