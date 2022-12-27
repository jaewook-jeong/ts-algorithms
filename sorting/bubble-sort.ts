const A: number[] = [5, 2, 4, 6, 1, 3];
const N: number = 6;

function solution(array: number[], n: number) {
  let flag = true;
  let count = 0;
  while (flag) {
    flag = false;
    for(let i = n-1 ; i > 0 ; i--) {
      if (array[i] < array[i-1]) {
        const temp = array[i];
        array[i] = array[i-1];
        array[i-1] = temp;
        count++;
        flag = true;
      }
    }
    console.log(array.join(', '));
  }
  console.log(count)
}

// solution(A, N);

// 이렇게하면 매번 다 돔 n-1의 제곱번 돈다.

// 줄여보기
function optimizeSolution(array: number[], n: number) {
  let count = 0;
  let countA = 0;
  for (let i = 0; i < n; i++) {
    for (let j = n - 1 ; j > i ; j--) {
      countA++;
      if (array[j] < array[j-1]) {
        const temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
        count++;
      }
    }
    console.log(array.join(', '));
  }
  console.log(count, countA);
}

optimizeSolution(A, N);


