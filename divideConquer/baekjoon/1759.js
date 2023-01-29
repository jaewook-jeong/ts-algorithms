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
  const [L, C] = input[0].split(' ').map(Number);
  const alphabet = input[1].split(' ').sort();
  const aeiou = ['a', 'e', 'i', 'o', 'u'];
  const answer = [];
  function makePwd(pwd, index) {
    if (pwd.length === L) {
      let cnt = 0;
      for(let i = 0; i<L; i++){
        if(aeiou.includes(pwd[i])){
          cnt++;
        }
      }
      if(cnt>0 && L-cnt>1){
        answer.push(pwd);
      }
    } else {
      for (let i = index+1; i< C; i++) {
        makePwd(pwd+alphabet[i], i);
      }
    }
  }

  makePwd('', -1);
  console.log(answer.join('\n'));
}


