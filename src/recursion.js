/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n === 0) {
    return 1;
  } else if (n < 1) {
    return null;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  // if (array.length === 1) {
  //   return array[0];
  // }
    return array[0] + sum(array.slice(1));

};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var result = 0;
  if (!Array.isArray(array)) {
    result = result + array;
  } else {
    array.forEach(function(item) {
      result = result + arraySum(item);
    });
  }
  return result;

};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0) {
    n = Math.abs(n);
  }

  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

  if (n === 0) {
    return 0;
  } else if (n > 0){
    return n + sumBelow(n - 1) -1;
  } else {
    return n + sumBelow(n + 1) + 1;
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var result = [];
  var current = x < y ? x + 1 : x - 1;

  if (x === y || Math.abs(x-y) === 1 || current === y) {
    return result;
  }
 result.push(current);
 return result.concat(range(current, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else {
    return (1 / base) / (1/ (exponent(base, exp + 1)));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  } else if (n >= 0 && n < 1) {
    return false;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  }
  var reversed = '';
  var lastChar = string.substring(string.length - 1);
  var remainingChar = string.substring(0, string.length - 1);
  reversed += lastChar;
  return reversed.concat(reverse(remainingChar));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.replace(/\s+/g, '');
  string = string.toLowerCase();
  var firstChar = string[0];
  var lastChar = string[string.length - 1];
  var remainingChar = string.substring(1, string.length - 1);
  if (string.length <= 1) {
    return true;
  } else if (firstChar === lastChar) {
    return palindrome(remainingChar)
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  var negative = x < 0 ? true : false;
  x = x > 0 ? x : parseInt(x.toString().substring(1));
  y = y > 0 ? y : parseInt(y.toString().substring(1));
  if (x < y && !negative) {
    return x;
  } else if (x < y && negative) {
    return -x;
  }
  var currentNum = x - y;
  if (currentNum === 0) {
    return 0;
  } else if (!negative) {
    return modulo(currentNum, y);
  } else {
    return modulo(-currentNum, y)
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  var negative;
  var product = 0;
  if (x < 0 && y < 0) {
    x = x - x - x;
    y = y - y - y;
    negative = false;
  } else if (x < 0 || y < 0) {
    negative = true;
    if (x < 0) {
      x = x - x - x;
    } else {
      y = y - y - y;
    }
  } else {
    negative = false;
  }

  if (y === 0) {
    return product;
  } else if (y >= 1) {
    y = y - 1;
    if(negative) {
      product -= x;
      return product + multiply(-x, y);
    } else {
      product += x;
      return product + multiply(x, y);
    }
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
    if (x === 0 && y === 0) {
      return NaN;
    }
    var quotient = 0;
    var negative;
    if (x < 0 && y < 0) {
      x = x - x - x;
      y = y - y - y;
      negative = false;
    } else if (x < 0 || y < 0) {
      negative = true;
      if (x < 0) {
        x = x - x - x;
      } else {
        y = y - y - y;
      }
    } else {
      negative = false;
    }

    if (x === 0 || x < y) {
      if (negative) {
        return quotient - quotient - quotient;
      } else {
        return quotient;
      }
    } else {
      x = x - y;
      if (negative) {
        quotient --;
        return quotient + divide(-x, y)
      }
      quotient ++;
      return quotient + divide(x, y)
    }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x === y) {
    return x;
  } else if (x < 0 || y < 0) {
    return null;
  } else if (x < y) {
    var xmod = y % x;
    if (xmod === 0) {
      return x;
    } else {
      return gcd(x, xmod)
    }
  } else {
    var ymod = x % y;
    if (ymod === 0) {
      return y;
    } else {
      return gcd(ymod, y);
    }
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1.length === 0 && str2.length === 0) {
      return true;
    } else if (str1[0] === str2[0]) {
      return compareStr(str1.substring(1), str2.substring(1))
    } else {
      return false;
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var lettersArr = [];
  if (str.length === 0) {
    return lettersArr;
  } else {
    lettersArr.push(str[0]);
    return lettersArr.concat(createArray(str.substring(1)));
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var reversedArray = [];
  if (array.length === 0) {
    return reversedArray;
  } else {
    reversedArray.push(array[array.length - 1]);
    return reversedArray.concat(reverseArr(array.slice(0, array.length - 1)));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var builtArray = [];
  if (length === 0) {
    return builtArray;
  } else {
    builtArray.push(value);
    return builtArray.concat(buildList(value, length - 1));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var fizzedBuzzed = [];
  if (n === 0) {
    return fizzedBuzzed;
  } else if (n % 3 === 0 && n % 5 === 0) {
    fizzedBuzzed.unshift('FizzBuzz');
    return fizzBuzz(n - 1).concat(fizzedBuzzed);
  } else if (n % 5 === 0) {
    fizzedBuzzed.unshift('Buzz');
    return fizzBuzz(n - 1).concat(fizzedBuzzed);
  } else if (n % 3 === 0) {
    fizzedBuzzed.unshift('Fizz');
    return fizzBuzz(n - 1).concat(fizzedBuzzed);
  } else {
    fizzedBuzzed.unshift(n.toString());
    return fizzBuzz(n - 1).concat(fizzedBuzzed);
  }
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var occurrences = 0;
  if (array.length === 0) {
    return occurrences;
  } else if (array[0] === value) {
    occurrences ++;
    return occurrences + countOccurrence(array.slice(1), value);
  } else {
    return occurrences + countOccurrence(array.slice(1), value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var mapped = [];
  if (array.length === 0) {
    return mapped;
  } else {
    mapped.push(callback(array[0]));
    return mapped.concat(rMap(array.slice(1), callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  var keys = Object.keys(obj);
  keys.forEach(function(currentKey) {
    if (currentKey === key) {
      count ++;
    }
    if (typeof obj[currentKey] === 'object') {
      count = count += countKeysInObj(obj[currentKey], key);
    }
  })
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  var keys = Object.keys(obj);
  keys.forEach(function(currentValue) {
    if (obj[currentValue] === value) {
      count++;
    } else if (typeof obj[currentValue] === 'object') {
      count = count += countValuesInObj(obj[currentValue], value);
    }
  });
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var i in obj) {
    var currentKey = i;
      if (currentKey === oldKey) {
        var currentValue = obj[currentKey];
        delete obj[currentKey];
        obj[newKey] = currentValue;
        if (typeof obj[currentKey] === 'object') {
          replaceKeysInObj(obj[currentKey], oldKey, newKey);
        }
      } else if (typeof obj[currentKey] === 'object') {
          replaceKeysInObj(obj[currentKey], oldKey, newKey);
        }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  // var nPlusPrevTwo = [0];
  // if (n === 0 || n < 0) {
  //   return null;
  // }
  // if (nPlusPrevTwo.length === 1) {
  //   if ((n - 1) === 0) {
  //     nPlusPrevTwo.push(1);
  //     return nPlusPrevTwo;
  //   } else {
  //     nPlusPrevTwo.push(1);
  //     return nPlusPrevTwo.concat((fibonacci(n - 1)).pop());
  //   }
  // } else {
  //   var sumOfLastTwo = nPlusPrevTwo[nPlusPrevTwo.length - 2] + nPlusPrevTwo[nPlusPrevTwo.length - 1];
  //   if ((n - 1) === 0) {
  //     nPlusPrevTwo.push(sumOfLastTwo);
  //     return nPlusPrevTwo;
  //   } else {
  //     return nPlusPrevTwo.concat((fibonacci(n - 1)).pop());
  //   }
  // }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var capital = [];
  if (array.length === 0) {
    return capital;
  }
  var allCaps = array[0].toUpperCase();
  capital.push(allCaps);
  return capital.concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var capital = [];
  if (array.length === 0) {
    return capital;
  }
  var firstCapital = array[0][0].toUpperCase() + array[0].substring(1);
  capital.push(firstCapital);
  return capital.concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
