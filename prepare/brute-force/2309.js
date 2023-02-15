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
  const Total = input.reduce((r,v) => r+v,0);
  let answer = ''
  let i = 0;
  while(i < 9) {
    for(let j = i+1; j<9; j++){
      if(Total-input[i]-input[j] === 100){
        const truth = input.filter((_,k) => k !== i && k !== j).sort((a,b) => a-b);
        answer = truth.join('\n');
        return console.log(answer);
      }
    }
    i++;
  }
}
