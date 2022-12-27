var arr = [5, 2, 4, 6, 1, 3];
var count = 6;
function solution(A, N) {
    for (var i = 1; i < A.length; i++) {
        var targetV = A[i];
        var j = i - 1;
        while (j >= 0 && A[j] > targetV) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = targetV;
        console.log(A.join(', '));
    }
}
solution(arr, count);
