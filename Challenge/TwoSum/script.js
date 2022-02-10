// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {
  const sums = [];
  // const hashTable = {};
  const ht = new Map();

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
    // calculate S - current element
    var sumMinusElement = S - arr[i];
    console.log("sumMinusElement:", sumMinusElement);

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    // if (hashTable[sumMinusElement.toString()] !== undefined) {
    //   sums.push([arr[i], sumMinusElement]);
    // }

    if (ht.get(sumMinusElement) !== undefined) {
      sums.push([arr[i], sumMinusElement]);
    }

    // add the current number to the hash table
    // hashTable[arr[i].toString()] = arr[i];
    ht.set(arr[i], arr[i]);
  }

  console.log("ht:", ht);

  // return all pairs of integers that sum to S
  return sums;
}

const sum = 9;
const testArr = [4, 5, 1, 8];

const result = twoSum(testArr, sum);

console.log("result:", result);
