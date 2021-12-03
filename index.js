/* Remove Array  duplication--------------*/
const array = [1, 2, 4, 3, 4, 5];
const sortedArr = [...new Set(array)];
console.log(sortedArr);

/*IIFE immidiate invke method----------*/
(function () {
  largeString(checkString, 'Helo Every one how are you doing');
})();

/* Find largest word from a sentence--------------*/

/* Higher order functions----------------------*/
function largeString(fn, str) {
  fn(str);
}

function checkString(strSplit) {
  strSplit = strSplit.split(' ');
  let lw = '';
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > lw.length) {
      lw = strSplit[i];
    }
  }
  console.log(lw);
}

/* call - accept arrguments-----------*/
const object = {
  name: 'praveen',
  designation: function (city) {
    return this.role + ' ' + city;
  },
  companies: function (companies) {
    return this.role + ' ' + companies;
  },
};

const designation = {
  role: 'Programmer',
};

const callObj = object.designation.call(designation, 'India');
console.log(callObj);

/* apply accept arrguments as arrays-------*/
const callObj2 = object.companies.apply(designation, ['TCS']);
console.log(callObj2);

/*bind */

/* IIFE || Closure to set a private method or variable-------- */

var counter = (function () {
  var i = 1;

  return {
    get: () => {
      return i;
    },
    set: (j) => {
      return j;
    },
    increment: () => {
      i++;
    },
  };
})();

console.log(counter.get());
console.log(counter.set(5));
counter.increment();
console.log(counter.get());

/* Object.Freeze // not allowed to add properties for an object */

/* Object.seal // not allowed to add properties for an object but allows to modify the existing properties */

/* Object.defineProperty // setting configuration to set which property can be manipulated */

let variable = {
  name: 'praveen',
  age: '3',
};

Object.defineProperty(variable, 'age', {
  value: 3,
  writable: false,
});

variable.name = 'RV';
variable.age = '5';

console.log(variable);

/* arguments  ARROW and NORMAL function----- */

const arg1 = () => {
  return arguments; // doesn't support arguments instead heare you can use rest operator
};

const arg2 = function () {
  return arguments;
};
console.log(arg1('hi'));
console.log(arg2('hi'));

/* ---- */
const ar = [3, 2, 1];
console.log(Math.max(ar));
