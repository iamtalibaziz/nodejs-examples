/**
 * This file contains examples of various array operations in JavaScript.
 * Each operation is encapsulated in a function with a description.
 */

// Sample array to be used in the examples
const sampleArray = [1, 2, 3, 4, 5];
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 25 },
];

// 1. Creating Arrays
/**
 * @description Demonstrates different ways to create an array.
 */
function createArrays() {
    console.log('--- Creating Arrays ---');
    // Literal notation
    const arr1 = [1, 2, 3];
    console.log('Literal notation:', arr1);

    // Array constructor
    const arr2 = new Array(1, 2, 3);
    console.log('Array constructor with elements:', arr2);

    // Array constructor with a single number (creates an array with that length)
    const arr3 = new Array(3);
    console.log('Array constructor with length:', arr3, `(length: ${arr3.length})`);
}

// 2. Accessing Elements
/**
 * @description Demonstrates how to access array elements by index.
 */
function accessElements() {
    console.log('\n--- Accessing Elements ---');
    console.log('Original array:', sampleArray);
    console.log('Element at index 0:', sampleArray[0]);
    console.log('Element at index 2:', sampleArray[2]);
    console.log('Last element:', sampleArray[sampleArray.length - 1]);
}

// 3. Adding Elements
/**
 * @description Demonstrates adding elements to an array.
 */
function addElements() {
    console.log('\n--- Adding Elements ---');
    const arr = [1, 2, 3];
    console.log('Original array:', arr);

    // push: Adds one or more elements to the end of an array.
    arr.push(4, 5);
    console.log('After push(4, 5):', arr);

    // unshift: Adds one or more elements to the beginning of an array.
    arr.unshift(-1, 0);
    console.log('After unshift(-1, 0):', arr);
}

// 4. Removing Elements
/**
 * @description Demonstrates removing elements from an array.
 */
function removeElements() {
    console.log('\n--- Removing Elements ---');
    const arr = [0, 1, 2, 3, 4, 5];
    console.log('Original array:', arr);

    // pop: Removes the last element from an array and returns it.
    const lastElement = arr.pop();
    console.log('After pop():', arr, `(Removed: ${lastElement})`);

    // shift: Removes the first element from an array and returns it.
    const firstElement = arr.shift();
    console.log('After shift():', arr, `(Removed: ${firstElement})`);
}

// 5. Iterating Over Arrays
/**
 * @description Demonstrates different ways to iterate over an array.
 */
function iterateArray() {
    console.log('\n--- Iterating Over Arrays ---');
    console.log('Original array:', sampleArray);

    // forEach: Executes a provided function once for each array element.
    console.log('Using forEach:');
    sampleArray.forEach((element, index) => {
        console.log(`Index ${index}: ${element}`);
    });

    // for...of: Creates a loop iterating over iterable objects.
    console.log('Using for...of:');
    for (const element of sampleArray) {
        console.log(element);
    }
}

// 6. Map: Creating a new array from an existing one
/**
 * @description The map() method creates a new array populated with the results
 * of calling a provided function on every element in the calling array.
 */
function mapArray() {
    console.log('\n--- Map ---');
    console.log('Original array:', sampleArray);
    const doubledArray = sampleArray.map(element => element * 2);
    console.log('Array after doubling each element:', doubledArray);
}

// 7. Filter: Creating a new array with a subset of elements
/**
 * @description The filter() method creates a new array with all elements
 * that pass the test implemented by the provided function.
 */
function filterArray() {
    console.log('\n--- Filter ---');
    console.log('Original array:', sampleArray);
    const evenNumbers = sampleArray.filter(element => element % 2 === 0);
    console.log('Array with only even numbers:', evenNumbers);
}

// 8. Reduce: Reducing an array to a single value
/**
 * @description The reduce() method executes a reducer function on each element
 * of the array, resulting in a single output value.
 */
function reduceArray() {
    console.log('\n--- Reduce ---');
    console.log('Original array:', sampleArray);
    const sum = sampleArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log('Sum of all elements:', sum);
}

// 9. Finding Elements
/**
 * @description Demonstrates various methods to find elements in an array.
 */
function findElements() {
    console.log('\n--- Finding Elements ---');
    const arr = [10, 20, 30, 40, 20];
    console.log('Original array:', arr);

    // indexOf: Returns the first index at which a given element can be found.
    console.log('indexOf(20):', arr.indexOf(20)); // 1

    // lastIndexOf: Returns the last index at which a given element can be found.
    console.log('lastIndexOf(20):', arr.lastIndexOf(20)); // 4

    // includes: Determines whether an array includes a certain value.
    console.log('includes(30):', arr.includes(30)); // true
    console.log('includes(50):', arr.includes(50)); // false

    // find: Returns the first element that satisfies the provided testing function.
    const foundUser = users.find(user => user.name === 'Bob');
    console.log('find user with name "Bob":', foundUser);

    // findIndex: Returns the index of the first element that satisfies the testing function.
    const foundUserIndex = users.findIndex(user => user.name === 'Bob');
    console.log('findIndex of user with name "Bob":', foundUserIndex);
}

// 10. Sorting Arrays
/**
 * @description Demonstrates how to sort an array.
 */
function sortArray() {
    console.log('\n--- Sorting Arrays ---');
    const unsorted = [3, 1, 5, 2, 4];
    console.log('Unsorted array:', unsorted);

    // sort: Sorts the elements of an array in place.
    // By default, it sorts based on string conversion.
    unsorted.sort();
    console.log('Default sort (string conversion):', unsorted);

    // For numbers, a compare function is needed.
    const numericSorted = [3, 1, 5, 2, 4];
    numericSorted.sort((a, b) => a - b); // Ascending
    console.log('Sorted numerically (ascending):', numericSorted);
    numericSorted.sort((a, b) => b - a); // Descending
    console.log('Sorted numerically (descending):', numericSorted);

    // reverse: Reverses the order of the elements of an array in place.
    const arrToReverse = [1, 2, 3, 4, 5];
    arrToReverse.reverse();
    console.log('Reversed array:', arrToReverse);
}

// 11. Slicing and Splicing
/**
 * @description Demonstrates slice and splice methods.
 */
function sliceAndSplice() {
    console.log('\n--- Slicing and Splicing ---');
    const arr = ['a', 'b', 'c', 'd', 'e'];
    console.log('Original array:', arr);

    // slice: Returns a shallow copy of a portion of an array into a new array.
    // It does not modify the original array.
    const sliced = arr.slice(1, 4);
    console.log('slice(1, 4):', sliced, '(Original unchanged:', arr, ')');

    // splice: Changes the contents of an array by removing or replacing
    // existing elements and/or adding new elements in place.
    const spliced = arr.splice(1, 2, 'x', 'y'); // Removes 2 elements from index 1 and adds 'x', 'y'
    console.log('After splice(1, 2, "x", "y"):', arr, `(Removed: ${spliced})`);
}

// 12. Joining and Converting to String
/**
 * @description Demonstrates converting an array to a string.
 */
function joinAndConvertToString() {
    console.log('\n--- Joining and Converting to String ---');
    const arr = ['Hello', 'World'];
    console.log('Original array:', arr);

    // join: Joins all elements of an array into a string.
    console.log('join(" "):', arr.join(' ')); // "Hello World"
    console.log('join("-"):', arr.join('-')); // "Hello-World"

    // toString: Returns a string representing the specified array and its elements.
    console.log('toString():', arr.toString()); // "Hello,World"
}

// 13. Checking Elements
/**
 * @description Demonstrates methods for checking array elements against a condition.
 */
function checkElements() {
    console.log('\n--- Checking Elements ---');
    const arr = [2, 4, 6, 8];
    const mixedArr = [1, 2, 3, 4, 5];
    console.log('Array 1:', arr);
    console.log('Array 2:', mixedArr);

    // every: Tests whether all elements in the array pass the test.
    const allEven = arr.every(num => num % 2 === 0);
    console.log('every element in Array 1 is even:', allEven); // true
    const allEvenInMixed = mixedArr.every(num => num % 2 === 0);
    console.log('every element in Array 2 is even:', allEvenInMixed); // false

    // some: Tests whether at least one element in the array passes the test.
    const someEven = mixedArr.some(num => num % 2 === 0);
    console.log('some elements in Array 2 are even:', someEven); // true
}

// 14. Flattening Arrays
/**
 * @description Demonstrates flattening a nested array.
 */
function flattenArray() {
    console.log('\n--- Flattening Arrays ---');
    console.log('Original nested array:', nestedArray);

    // flat: Creates a new array with all sub-array elements concatenated into it.
    const flattenedOnce = nestedArray.flat();
    console.log('flat() (depth 1):', flattenedOnce);

    const fullyFlattened = nestedArray.flat(Infinity);
    console.log('flat(Infinity):', fullyFlattened);

    // flatMap: Maps each element using a mapping function, then flattens the result.
    const arr = [1, 2, 3];
    const flatMapped = arr.flatMap(x => [x, x * 2]);
    console.log('flatMap(x => [x, x * 2]) on [1, 2, 3]:', flatMapped);
}

// 15. Copying Arrays
/**
 * @description Demonstrates how to create a shallow copy of an array.
 */
function copyArray() {
    console.log('\n--- Copying Arrays ---');
    console.log('Original array:', sampleArray);

    // Using slice
    const copy1 = sampleArray.slice();
    console.log('Copy with slice():', copy1);

    // Using spread syntax (...)
    const copy2 = [...sampleArray];
    console.log('Copy with spread syntax:', copy2);

    // Note: These are shallow copies. Modifying nested objects will affect the original.
}

// 16. Static Array Methods
/**
 * @description Demonstrates static methods on the Array constructor.
 */
function staticMethods() {
    console.log('\n--- Static Array Methods ---');

    // Array.from: Creates a new, shallow-copied Array instance from an array-like or iterable object.
    const str = 'hello';
    const fromString = Array.from(str);
    console.log('Array.from("hello"):', fromString);

    const fromSet = Array.from(new Set([1, 2, 3, 2, 1]));
    console.log('Array.from(new Set([1, 2, 3, 2, 1])):', fromSet);

    // Array.isArray: Determines whether the passed value is an Array.
    console.log('Array.isArray([]):', Array.isArray([])); // true
    console.log('Array.isArray({}):', Array.isArray({})); // false

    // Array.of: Creates a new Array instance with a variable number of arguments.
    const fromOf = Array.of(1, 'two', { three: 3 });
    console.log("Array.of(1, 'two', { three: 3 }):", fromOf);
}


// --- Execution ---
// You can uncomment these function calls to see the output in the console.

console.log('JavaScript Array Operations');
console.log('===========================');

createArrays();
accessElements();
addElements();
removeElements();
iterateArray();
mapArray();
filterArray();
reduceArray();
findElements();
sortArray();
sliceAndSplice();
joinAndConvertToString();
checkElements();
flattenArray();
copyArray();
staticMethods();
