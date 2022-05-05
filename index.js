
// I work for NGO.


/* I love to teach and play with kids */

function sum(arr, n) {

  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}