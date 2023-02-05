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
  const [N, targetRow, targetColumn] = input[0].split(' ').map(Number);
  //r행 c열
  const size = Math.pow(2, N);
  let result = 0;

  function partition(r, c, _size) {
    if (_size === 1) return;
    const newSize = _size / 2;
    const overCenterRow = r + newSize;
    const overCenterColumn = c + newSize;
    if (targetRow < overCenterRow && targetColumn < overCenterColumn) {
      partition(r, c, newSize);
    }

    if (targetRow < overCenterRow && overCenterColumn <= targetColumn) {
      result += (_size * _size) / 4;
      partition(r, overCenterColumn, newSize);
    }

    if (overCenterRow <= targetRow && targetColumn < overCenterColumn) {
      result += ((_size * _size) / 4) * 2;
      partition(overCenterRow, c, newSize);
    }

    if (overCenterRow <= targetRow && overCenterColumn <= targetColumn) {
      result += ((_size * _size) / 4) * 3;
      partition(r + newSize, c + newSize, newSize);
    }
  }
  partition(0, 0, size);
  console.log(result);
}
