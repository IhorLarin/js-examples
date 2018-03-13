// var movies = 'Justice League, Thor: Ragnarok, Blade Runner 2049, Jungle, Seven Sisters, American Made, Dunkirk, Only the Brave, War for the Planet of the Apes, American Assassin, It, Geostorm, The Cloverfield Paradox, The Fate of the Furious, Atomic Blonde';


var film = {
  name: 'Interstellar Inception'
}

function addMovie(obj, mov) {
  var moviesArr = obj.name.split(' ');
  for (var i = 0; i < moviesArr.length; i++) {
    if (moviesArr[i] === mov) return
  }
  moviesArr.push(mov);
  obj.name = moviesArr.join(', ');

}

console.log(film.name);
addMovie(film, 'Warrior');
addMovie(film, 'Warrior');
addMovie(film, 'Warrior');
console.log(film.name);

console.log('----------------------------------------------------------------------------');

function cumelize(str) {
  var strArr = str.split('-');
  for (var i = 1; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  console.log(strArr.join(''));
  return strArr.join('');
}

cumelize('border-left-width');

console.log('----------------------------------------------------------------------------');
var obj = {
  className: 'open menu'
}

function removeClass(obj, cls) {

  var arr = obj.className.split(' ')
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === cls) {
      arr.splice(i, 1);
      i--;
    }
  }
  return obj.className = arr.join('');
}

removeClass(obj, 'open');
console.log(obj.className);

console.log('----------------------------------------------------------------------------');

function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i--, 1);
    }
  }
}

var arr = [5, 3, 8, 1];
var arr2 = [5, 7, 3, -12, 15, -32, 32, 40, 39, 8, 2];
filterRangeInPlace(arr, 1, 4);
filterRangeInPlace(arr2, -5, 36);

console.log(arr);
console.log(arr2);

console.log('----------------------------------------------------------------------------');

var arr3 = [5, 12, 2, 1, -10, 8];

function compare(a, b) {
  return a - b;
}

arr3.sort(compare).reverse();
console.log(arr3);

console.log('----------------------------------------------------------------------------');

var arrMain = ['HTML', 'JavaScript', 'CSS'];
var arrSorted = arrMain.slice().sort();

console.log(arrMain);
console.log(arrSorted);

console.log('----------------------------------------------------------------------------');

var arrX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function rand(a, b) {
  return Math.random() - 0.5
}

arrX.sort(rand);
console.log(arrX);

console.log('----------------------------------------------------------------------------');

var vasya = {
  name: 'Vasa',
  age: 23
};
var masha = {
  name: 'Masha',
  age: 24
};
var vova = {
  name: 'Vova',
  age: 6
};

var people = [vasya, masha, vova];

function sort(a, b) {
  return a.age - b.age;
}

people.sort(sort);

var newArr = [];
for (var i = 0; i < people.length; i++) {
  newArr[i] = people[i].name;
}
console.log(newArr);

console.log('----------------------------------------------------------------------------');

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(element) {
  var tmp = element;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printList(list);

console.log('==================');

function printListRecursive(list) {
  console.log(list.value);
  if (list.next) {
    printListRecursive(list.next)
  }
}

printListRecursive(list);

console.log('----------------------------------------------------------------------------');

var anogramArr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var sorted = arr[i].toLowerCase().split('').sort().join('')
    obj[sorted] = arr[i];
  }

  var cleanArr = [];

  for (var key in obj) {
    cleanArr.push(obj[key]);
  }

  return cleanArr;
}

console.log(aclean(anogramArr));

console.log('----------------------------------------------------------------------------');

function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var prop = arr[i];
    obj[prop] = arr[i];
  }



  return Object.keys(obj);
}
var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];
console.log( unique(strings) );
/*--------------------------------------------------*/
function uni(arr) {
  var res = [];

  nextInput:
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    for (var k = 0; k < res.length; k++) {
      if (res[k] === str) {
        continue nextInput;
      }
    }
    res.push(str);
  }
  return res;
}
console.log( uni(strings) );

console.log('----------------------------------------------------------------------------');










