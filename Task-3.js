class Calculator {
  constructor(num_1, num_2) {
    this.num_1 = num_1;
    this.num_2 = num_2;
  }
  multiply(num_1, num_2) {
    return num_1 * num_2;
  }
  divide(num_1, num_2) {
    return num_1 / num_2;
  }
  add(num_1, num_2) {
    return num_1 + num_2;
  }
  subtract(num_1, num_2) {
    return num_1 - num_2;
  }
}

module.exports = Calculator;
