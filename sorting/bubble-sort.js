var A = [5, 2, 4, 6, 1, 3];
var N = 6;
function solution(array, n) {
    var flag = true;
    var count = 0;
    while (flag) {
        flag = false;
        for (var i = n - 1; i > 0; i--) {
            if (array[i] < array[i - 1]) {
                var temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
                count++;
                flag = true;
            }
        }
        console.log(array.join(', '));
    }
    console.log(count);
}
// solution(A, N);
// 이렇게하면 매번 다 돔 n-1의 제곱번 돈다.
// 줄여보기
function optimizeSolution(array, n) {
    var count = 0;
    var countA = 0;
    for (var i = 0; i < n; i++) {
        for (var j = n - 1; j > i; j--) {
            countA++;
            if (array[j] < array[j - 1]) {
                var temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
                count++;
            }
        }
        console.log(array.join(', '));
    }
    console.log(count, countA);
}
optimizeSolution(A, N);
