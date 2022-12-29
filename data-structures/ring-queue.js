class RingQueue {
  constructor(props) {
    this._arr = new Array(props);
    this.head = 0;
    this.tail = 0;
  }

  enqueue(data) {
    if (this.isFull()) {
      throw new Error('overflow');
    }
    this._arr[this.tail] = data;
    if (this.tail + 1 === this._arr.length) {
      this.tail = 0;
    } else {
      this.tail += 1;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('underflow');
    }
    const returnValue = this._arr[this.head];
    if (this.head + 1 === this._arr.length) {
      this.head = 0;
    } else {
      this.head += 1;
    }
    return returnValue;
  }

  isEmpty() {
    return this.head === this.tail;
  }

  isFull() {
    return this.head === (this.tail) % (this._arr.length + 1);
  }
}

const input = [
  '5 100',
  'p1 150',
  'p2 80',
  'p3 200',
  'p4 350',
  'p5 20',
]
function solution(arr) {
  const [taskCount, quantum] = arr.shift().split(' ').map((v) => Number(v));
  const queue = new RingQueue(7);
  arr.forEach((task) => queue.enqueue(task));
  let count = 0;
  while(!queue.isEmpty()) {
    const [id, t] = queue.dequeue().split(' ');
    const time = Number(t);
    console.log(id, time);
    if (time > quantum) {
      queue.enqueue(`${id} ${time - quantum}`);
      count = count + quantum;
    } else if (time === quantum) {
      console.log(`${id} ${quantum * (count + 1)}`);
      count = count + quantum;
    } else {
      console.log(`${id} ${(quantum * count) + time}`);
      count = count + time;
    }
  }
}


solution(input);