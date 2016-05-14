
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var arr1 = arr.sort(function(a, b) {
      return a - b;
  });
  console.log(arr1);
  for(var i = 0; i < arr1.length; i++) {
    if(arr[i] > num) {
        return arr[i-1] == num ? i-1: i;
    }
  }
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
