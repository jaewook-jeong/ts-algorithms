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

function solution(number) {
  let str = "";

  function drawStar(i, j){
    if(i % 3 === 1 && j % 3 === 1){
      str += " ";
    }else{
      if(Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0){
        str += "*";
      }else{
        drawStar(Math.floor(i / 3), Math.floor(j / 3));
      }
    }
  }

  for(let i = 0; i < number; i++){
    for(let j = 0; j < number; j++){
      drawStar(i, j);
    }
    str += "\n";
  }
  console.log(str);
}

// 빈칸이 들어가게되는 패턴을 분석
