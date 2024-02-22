const checkStringLength = (string, length) => string.length <= length;

const isPalindrome = function(string) {
  const targetString = string.replaceAll(' ', '').toLowerCase();
  let right = targetString.length - 1;
  for (let left = 0; left <= right; left++) {
    if(targetString[left] !== targetString[right]) {
      return false;
    }
    right--;
  }
  return true;
};


const getInteger = function(string) {
  string = string.toString();
  let parseIneger = '';
  for (let i = 0; i < string.length; i++) {
    if (Number(string[i]) || string[i] === '0') {
      parseIneger += string[i];
    }
  }
  return parseInt(parseIneger, 10);
};

// eslint-disable-next-line
console.log(checkStringLength('проверяемая строка', 20));
// eslint-disable-next-line
console.log(isPalindrome('Лёша на полке клопа нашёл '));
// eslint-disable-next-line
console.log(getInteger('1 кефир, 0.5 батона'));
