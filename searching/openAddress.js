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

class OpenAddress {
  constructor() {
    this.T = [];
    this.m = 23;
  }

  h1(key) {
    return key % this.m;
  }

  h2(key) {
    return 1 + (key % (this.m - 1))
  }

  h(key, i) {
    return (this.h1(key) + (i * this.h2(key))) % this.m
  }

  insert(key) {
    let i = 0;
    while (true) {
      let j = this.h(key, i);
      if (!this.T[j]) {
        this.T[j] = key;
        return j
      } else {
        i++;
      }
    }
  }

  search(key) {
    let i = 0;
    while (true) {
      let j = this.h(key, i);
      if (this.T[j] === key) {
        return j
      } else if (!this.T[j] || i >= this.m) {
        return null;
      } else {
        i++;
      }
    }
  }

  log() {
    console.log(this.T.join(' '));
  }
}

function solution(input) {
  const openAddress = new OpenAddress();

  input.shift();
  input.forEach((v) => {
    const [method, value] = v.split(' ');
    if (method === 'insert') {
      openAddress.insert(value);
    } else if (method === 'find') {
      console.log(openAddress.search(value));
    }
    openAddress.log();
  })
}
