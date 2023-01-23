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
  const [lectureCount, blueLayCount] = input[0].split(' ').map(Number);
  const lecture = input[1].split(' ').map(Number);
  let right = lecture.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  let left = 0;
  let answer = 10000000000;

  while(left<=right){
    let blueLaySize = Math.floor((left + right) / 2);
    let count = 1;
    let currentSize = 0;

    for (let i = 0; i < lectureCount; i++) {
      if (lecture[i] > blueLaySize){
        count = 10000000000;
        break;
      }
      if (currentSize + lecture[i] <= blueLaySize) {
        currentSize += lecture[i];
      } else {
        count++;
        currentSize = lecture[i];
      }
    }
    if (count <= blueLayCount) {
      answer = Math.min(answer, blueLaySize);
      right = blueLaySize - 1;
    } else {
      left = blueLaySize + 1;
    }
  }
  console.log(answer);
}