
// I work for NGO.


/* I love to teach and play with kids */


// Setup
function nextInLine(arr, item) {
  // Only change code below this line
   var queue = arr.push(item);

  var removeItem = arr.shift();

  return removeItem;
  return item;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));