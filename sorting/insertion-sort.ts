const arr: number[] = [5, 2, 4, 6, 1, 3];
const count: number = 6;

function solution(A: number[], N: number) {
  for (let i = 1 ; i < A.length ; i++ ) {
    const targetV = A[i];
    let j = i - 1;
    while (j >= 0 && A[j] > targetV) {
      A[j+1] = A[j];
      j--;
    }
    A[j+1] = targetV;
    console.log(A.join(', '));
  }
}

/**
 * 일단 생각해보면 현재 확인중인 index, 배열의 두번째부터 마지막까지 순차적으로
 * 현재 타겟 index의 값을 들고 해당 index보다 작은 방향으로 돌면서
 * 배열 앞쪽 index의 수가 현재 들고 있는 숫자보다 큰지 확인
 * 크다면 한 칸 씩 뒤로 밀고
 * 작다면 해당 자리에 픽스 또는 돌고있는 index가 0이면 픽스
 * */

// 현재까지 정렬된 위치 내에서 알맞게 삽입한다의 느낌

solution(arr, count);