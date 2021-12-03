// Remove Array  duplication
const array = [1, 2, 4, 3, 4, 5];
const sortedArr = [...new Set(array)];
console.log(sortedArr);

//IIFE immideate invke method
(function () {
  largeString(checkString, 'Helo Every one how are you doing');
})();

// Find largest word from a sentence

// Higher order functions
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

//call, bind, apply
