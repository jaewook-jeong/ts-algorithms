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

// 1 -> 4 -> 16 -> 64
function solution(input) {
  const N = Number(input);
  let left = [(0.00000000), (0.00000000)];
  let right = [(100.00000000), (0.00000000)];
  console.log(left.join(' '));
  koch(N, left, right);
  console.log(right.join(' '));
}
const th = Math.PI * 60.0 / 180.0;
function koch(n, left, right) {
  if (n === 0) return;
  const oneThirdX = ((2 * left[0] + right[0])/3);
  const oneThirdY = ((2 * left[1] + right[1])/3);
  const twoThirdX = ((left[0] + 2 * right[0])/3);
  const twoThirdY = ((left[1] + 2 * right[1])/3);
  const oneThird = [oneThirdX, oneThirdY];
  const center = [((twoThirdX - oneThirdX) * Math.cos(th)) - ((twoThirdY - oneThirdY) * Math.sin(th)) + oneThirdX, ((twoThirdX - oneThirdX) * Math.sin(th)) + ((twoThirdY - oneThirdY) * Math.cos(th)) + oneThirdY];
  const twoThird = [twoThirdX, twoThirdY];
  koch(n-1, left, oneThird);
  console.log(oneThird.join(' '));
  koch(n-1, oneThird, center);
  console.log(center.join(' '));
  koch(n-1, center, twoThird);
  console.log(twoThird.join(' '));
  koch(n-1, twoThird, right);
}