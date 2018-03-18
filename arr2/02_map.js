var numbers = [10, 20, 30, 40, 50];

var newNumbers = numbers.map(function (value) {
  return value * 2;
});

console.log(numbers);
console.log(newNumbers);

console.log('\n ------------------------------------ \n');

var myMap = function(array, callback) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
};

var res = myMap(numbers, function(value, index) {
  return Math.pow(value, index);
});

console.log(numbers);
console.log(res);
