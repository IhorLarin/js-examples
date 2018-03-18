
// every();

var five = [5, 5, 6, 5, 5, 5];

var res_1 = five.every(function (value) {
  return value === 5; // поверне false
});

console.log(res_1); // false

var four = [4, 4, 4, 4];
var res_2 = four.every(function (value) {
  return value === 4; // поверне true
});

console.log(res_2); //true

console.log('\n');

// some();
var num_1 = [1, 2, 3, 4, 5];
var res_3 = num_1.some(function (value) {
  return value === 3; // поверне true
});

console.log(res_3); // true

var num_2 = [5, 6, 7, 8, 9];
var res_4 = num_2.some(function (value) {
  return value < 5; // поверне false
});

console.log(res_4); // false

console.log('\n');

var s1 = ['js', 'apple', 'css'];

var mySome = function (array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
};

var q = mySome(s1, function (value) {
  return value === 'js'
});

console.log(q);



