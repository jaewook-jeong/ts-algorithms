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

function solution(array) {
  const [universe, orbitCount] = array.shift().split(' ').map((v) => Number(v));
  const sortedOrbitMap = {};
  array.forEach((u) => {
    const tempUniv = u.split(' ').map((value, originalIndex) => ({ originalIndex, value: Number(value) }));
    const order = indexReturnSort(tempUniv, orbitCount).join('');
    if (sortedOrbitMap?.[order] > 0) {
      sortedOrbitMap[order] += 1;
    } else {
      sortedOrbitMap[order] = 1;
    }
  });
  console.log(Object.values(sortedOrbitMap).reduce((previousValue, currentValue) => ((currentValue * (currentValue - 1))/2) + previousValue, 0));
}

function indexReturnSort(array, n) {
  const returnOrderArr = [];
  let beforeValue = -1;
  for (let j = 0; j < n; j++) {
    let targetIndex = j;
    for (let i = j + 1; i < n; i++) {
      if (array[targetIndex].value > array[i].value) {
        targetIndex = i;
      }
    }
    const pushValue = array[targetIndex].value;
    returnOrderArr.push(array[targetIndex].originalIndex);
    returnOrderArr.push(beforeValue === pushValue ? '=' : '<');
    beforeValue = pushValue;
    if (targetIndex !== j) {
      const temp = {...array[j]};
      array[j] = {...array[targetIndex]};
      array[targetIndex] = temp;
    }
  }
  return returnOrderArr;
}

function optimizeSolution(array, n) {
  for (let i = 0; i < n; i++) {
    for (let j = n - 1 ; j > i ; j--) {
      if (array[j].value < array[j-1].value) {
        const temp = {...array[j]};
        array[j] = {...array[j-1]};
        array[j-1] = temp;
      }
    }
  }
  return array.map((v) => v.originalIndex);
}
