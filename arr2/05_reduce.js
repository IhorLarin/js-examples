
var nums = [10, 20, 30, 40, 50];
var sum = nums.reduce(function(result, num) {
  return result + num;
}, 0);

console.log(sum);