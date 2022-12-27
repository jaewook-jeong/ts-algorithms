const N: number = 6;
const A: number[] = [5, 2, 4, 6, 1, 3];

function solution(array: number[], n: number) {
  let count = 0;
  for (let j = 0 ; j < n ; j++) {
    let targetIndex = j;
    for (let i = j+1 ; i < n ; i++ ) {
      if (array[targetIndex] > array[i]) {
        targetIndex = i;
      }
    }
    if (targetIndex !== j) {
      const temp = array[j];
      array[j] = array[targetIndex];
      array[targetIndex] = temp;
      count++;
    }
  }
  console.log(count);
}

solution(A, N);