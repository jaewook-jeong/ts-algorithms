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


const chemical = {
  H: 1,
  C: 12,
  O: 16,
};

function solution(chemical_formula) {
  let mass = 0;
  const stack = [];
  chemical_formula[0].split('').forEach((v) => {
    if (v === "(") {
      stack.push(v);
    } else if (v in chemical) {
      stack.push(chemical[v]);
    } else if (v === ")") {
      let count = 0
      while (true) {
        let target = stack.pop()

        if (target === "(") break
        count += target
      }
      stack.push(count);
    } else {
      const target = stack.pop();
      stack.push(target * Number(v));
    }
  });
  console.log(stack.reduce((pre, cur) => pre + cur, 0));
}