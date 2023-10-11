'use strict'

// 11.Write a program that takes two arrays and finds their intersection using Sets.
// Sample Input: const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// Sample Output: [3, 4, 5]

function findIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const intersection = new Set(
    [...set1].filter((element) => set2.has(element))
  );

  const intersectionArray = [...intersection];

  return intersectionArray;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const result = findIntersection(arr1, arr2);
console.log(result);

// 12 .Write a program that takes an array containing nested arrays and flattens it into a
// single array using the array methods.
// Sample Input: const arr = [1, [2, 3], [4, 5, [6, 7]]];
// Sample Output: [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arr) {
  return arr.reduce((flatArray, currentElement) => {
    if (Array.isArray(currentElement)) {
      flatArray.push(...flattenArray(currentElement));
    } else {
      flatArray.push(currentElement);
    }
    return flatArray;
  }, []);
}

const arr = [1, [2, 3], [4, 5, [6, 7]]];
const flattenedArr = flattenArray(arr);
console.log(flattenedArr);

// 13 Write a program that takes an array containing both truthy and falsy values and
// removes the falsy values using the array methods.
// Sample Input: const arr = [0, &quot;hello&quot;, &quot;&quot;, 42, false, &quot;world&quot;, null, true, undefined];
// Sample Output: [&quot;hello&quot;, 42, &quot;world&quot;, true]

const arr3 = [0, "hello", "", 42, false, "world", null, true, undefined];

const filteredArr = arr.filter((element) => element); // Using

console.log(filteredArr);

// 14. Write a program that takes an array of numbers and returns an array with only the
// unique elements without using the array methods.
// Sample Input: const arr = [1, 2, 2, 3, 4, 4, 5];
// Sample Output: [1, 2, 3, 4, 5]

const arr4 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  let isUnique = true;

  for (let j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
      isUnique = false;
      break;
    }
  }

  if (isUnique) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr);

// 15. Write a program that takes an array of numbers and filters out the prime numbers
// using the array methods.
// Sample Input: const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Sample Output: [2, 3, 5, 7]

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

const arr5 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = arr.filter((number) => isPrime(number));

console.log(primeNumbers);

// 16 Write a program that takes an object and checks if a specific property exists
// Sample Input: const obj = { name: &quot;John&quot;, age: 30, city: &quot;New York&quot; };
// const propertyName = &quot;age&quot;;
// Sample Output: Property &quot;age&quot; exists: true

const obj = { name: "abishek", age: 23, city: "tirupur" };
const propertyName = "age";

if (obj.hasOwnProperty(propertyName)) {
  console.log(`Property "${propertyName}" exists: true`);
} else {
  console.log(`Property "${propertyName}" exists: false`);
}

// 17. Write a program that takes an object containing some properties with undefined
// values and removes those properties
// Sample Input: const obj = { name: &quot;John&quot;, age: undefined, city: &quot;New York&quot; };

// Sample Output: { name: &quot;John&quot;, city: &quot;New York&quot; }

const obj1 = { name: "abishek", age: undefined, city: "tirupur" };

for (const key in obj) {
  if (obj[key] === undefined) {
    delete obj[key];
  }
}

console.log(obj);

// 18. Write a program that takes an array containing nested arrays and destructures
// specific elements from the nested arrays.
// Sample Input const arr = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
// Sample Output: First Element of Nested Array: 1
// Second Element of Nested Array: 4
// Third Element of Nested Array:

const arr7 = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];

const [[firstElement], [, secondElement], [, , thirdElement]] = arr7;

console.log(`First Element of Nested Array: ${firstElement}`);
console.log(`Second Element of Nested Array: ${secondElement}`);
console.log(`Third Element of Nested Array: ${thirdElement}`);

// 19. Write a program that takes an object and extracts properties with renamed variables
// using destructuring assignment.
// Sample Input: const user = { name: &quot;John&quot;, age: 30 };
// Sample Output: User Name: John
// User Age: 30

const user = { name: "ABISHEK", age: 23 };

const { name: userName, age: userAge } = user;

console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);

// 20. Write a program that takes a function with an object parameter and provides default
// values for missing properties using destructuring assignment.
// Sample Input:
// function displayInfo({ name = &quot;Anonymous&quot;, age = 25 }) {
// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// }
// const obj = { name: &quot;John&quot; };
// Sample Output:
// Name: John
// Age: 25

function displayInfo({ name = "Anonymous", age = 23 }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

const obj2 = { name: "Gowtham" };
displayInfo(obj);