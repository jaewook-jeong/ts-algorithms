class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }

  isEmpty() {
    return this._arr.length === 0;
  }
}


const input = '1 2 + 3 4 - *';

// Number.isInteger(parseInt(v)) 또는 isNaN(v)
function solution(array) {
  const inputArr = array.split(' ');
  const stack = new Stack();
  inputArr.forEach((v) => {
    if (Number.isInteger(parseInt(v))) {
      stack.push(Number(v));
    } else {
      const after = stack.pop();
      const prev = stack.pop();
      const a = operator[v]([prev, after]);
      stack.push(a);
    }
  });
  console.log(stack.pop())
}


const operator = {
  '+': function(a){
    return a.reduce(function(acc, curr){
      return acc + curr
    });
  },
  '-': function(a){
    return a.reduce(function(acc, curr){
      return acc - curr;
    });
  },
  '*': function(a){
    return a.reduce(function(acc, curr){
      return acc * curr;
    })
  },
  '/': function(a){
    return a.reduce(function(acc, curr){
      return acc / curr;
    });
  }
};


solution(input);