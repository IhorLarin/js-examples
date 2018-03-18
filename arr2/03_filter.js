var num = [-1, 1, -3, 2, 0, 12, 5, -7];

var newNum = num.filter(function (value) {
  return value >= 0;
});

console.log(num);
console.log(newNum.sort(function (a, b) {
  return a - b
}));

console.log('\n ------------------------------------ \n');

function myFilter(array, callback) {
  var posNum = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === true) {
      posNum.push(array[i]);
    }
  }
  return posNum;
}

var n = myFilter(num, function (value) {
  return value > 0;
});

console.log(num);
console.log(n);

console.log('\n ------------------------------------ \n');

var data = [
  {"id": 1, "name": "Ernest", "email": "ebishop0@myspace.com", "isCustomer": false},
  {"id": 2, "name": "Michael", "email": "mturner1@multiply.com", "isCustomer": false},
  {"id": 3, "name": "Mildred", "email": "mwelch2@google.it", "isCustomer": false},
  {"id": 4, "name": "Jeremy", "email": "jwilson3@hostgator.com", "isCustomer": false},
  {"id": 5, "name": "Judy", "email": "jellis4@ameblo.jp", "isCustomer": true},
  {"id": 6, "name": "Judy", "email": "jrogers5@ow.ly", "isCustomer": false},
  {"id": 7, "name": "Chris", "email": "cbennett6@nasa.gov", "isCustomer": false},
  {"id": 8, "name": "Ruth", "email": "rmason7@simplemachines.org", "isCustomer": true},
  {"id": 9, "name": "Justin", "email": "jmedina8@indiegogo.com", "isCustomer": true},
  {"id": 10, "name": "Dennis", "email": "dflores9@g.co", "isCustomer": true}
];

var customers = data.filter(function (value) {
  return value.email.charAt(0).toLowerCase() === 'm';
});
console.log(customers);

