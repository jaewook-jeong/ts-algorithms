var N = 6;
var A = [5, 2, 4, 6, 1, 3];
function solution(array, n) {
    var count = 0;
    for (var j = 0; j < n; j++) {
        var targetIndex = j;
        for (var i = j + 1; i < n; i++) {
            if (array[targetIndex] > array[i]) {
                targetIndex = i;
            }
        }
        if (targetIndex !== j) {
            var temp = array[j];
            array[j] = array[targetIndex];
            array[targetIndex] = temp;
            count++;
        }
    }
    console.log(count);
}
solution(A, N);
