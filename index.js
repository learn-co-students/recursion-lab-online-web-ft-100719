// Code your solution here!

function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let subString = string.substring(1, string.length);
    printString(subString);
  } else {
    return;
  }
}

function reverseString(string) {
  if (string !== '') {
    return reverseString(string.substring(1)) + string.charAt(0);
  } else {
    return '';
  }
}

function isPalindrome(string) {
  if (string[0] !== string[string.length - 1]) {
    return false;
  }
  if (string.length > 1) {
    isPalindrome(string.substring(1, string.length - 1));
  }
  return true;
}

function addUpTo(arr, n) {
  if (n > 0) {
    arr[0] += arr[n];
    return addUpTo(arr, n - 1);
  } else {
    return arr[0];
  }
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let lastEl = arr.pop();
    return Math.max(lastEl, maxOf(arr));
  }
}

function includesNumber(arr, n) {
  if (arr[0] === n) {
    return arr[0] === n;
  } else if (arr.length === 1 && arr[0] !== n) {
    return arr[0] === n;
  } else {
    arr.shift();
    return includesNumber(arr, n);
  }
}
