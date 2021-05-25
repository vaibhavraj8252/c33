class Test {
  constructor() {}

  functionVr() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = 0;
    for (var i = 0; i <= 9; i = i + 1) {
      if (i % 2 == 1 && arr[i] % 2 == 0) {
        sum = sum + arr[i];
      }
    }
    console.log(sum);
  }

  functionV() {
    var a = [17, 20, 24, 29, 16, 87, 19, 52];
    v = 1;
    for (var i = 0; i <= 7; i = i + 1) {
      if (a[i] % 2 == 1) {
        v = v * a[i];
      }
    }
 console.log(v) }
}
