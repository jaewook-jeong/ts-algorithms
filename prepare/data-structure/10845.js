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
  const queue = [];
  const answer = [];
  for (let i =1; i< input.length ; i++) {
    const [method, number] = input[i].split(' ');
    switch (method) {
      case 'push': {
        queue.push(Number(number));
        break;
      }
      case 'pop': {
        const pop = queue.shift();
        answer.push(pop ? pop : -1);
        break;
      }
      case 'size': {
        answer.push(queue.length);
        break;
      }
      case 'empty': {
        answer.push(queue.length === 0 ? 1 : 0);
        break;
      }
      case 'front': {
        const first = queue[0];
        answer.push(first ? first : -1);
        break;
      }
      case 'back': {
        const last = queue[queue.length-1];
        answer.push(last ? last : -1);
        break;
      }
    }
  }
  console.log(answer.join('\n'));
}

/*
*
* push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
* */