

var arr = ['Apple', 'Meizu', 'Samsung', 'Xiaomi', 'Nokia'];

arr.forEach(function (value, i, arr) {
  console.log(i + '  ' + value);
});

console.log();
console.log('------------------------------------------');
console.log();


var arr = [1, -1, 2, -2, 3];

var newArr = arr.filter(function (number) {
  return number > 0;
});

console.log(newArr);

console.log();
console.log('------------------------------------------');
console.log();

var names = ['HTML', 'CSS', 'JavaScript'];

var nameLengths = names.map(function (name) {
  return name.length;
});

console.log(nameLengths);

console.log();
console.log('------------------------------------------');
console.log();

var nums = [10, 20, 30, 40];

var result = nums.map(function (value, index, arr) {
  return Math.pow(value, index);
});

console.log(result);

console.log();
console.log('------------------------------------------');
console.log();

var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log(arr.every(isPositive));
console.log(arr.some(isPositive));

console.log();
console.log('------------------------------------------');
console.log();

var arr = [1, 2, 3, 4, 5]
var res = arr.reduce(function (prev, value) {
  return prev + value;
}, 0);

console.log(res);

console.log();
console.log('------------------------------------------');
console.log();

/* ----------------- TASKS ----------------- */

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}
console.log( arrLength ); // 4,5,2,5
/*-*-*-*-*-*-*-*-*/
var newArr = arr.map(function (value) {
  return value.length
});
console.log(newArr);

console.log();
console.log('------------------------------------------');
console.log();

var arr = [1, 2, 3, 4, 5];

function getSums(arr) {
  var res = [];

  var total = arr.reduce(function (prev, item) {    res.push(prev);
    return  prev + item;
  });
  res.push(total);

  return res;
}
console.log(getSums(arr));





