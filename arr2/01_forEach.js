var words = ['JavaScript', 'CSS', 'HTML'];

words.forEach(function (value, index, array) {
  console.log(value);
});

console.log('\n -------------------------------------- \n');

var myForEach = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

myForEach(words, function(value, index, arr) {
    console.log(value, index);
});





