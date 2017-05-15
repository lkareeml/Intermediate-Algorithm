//Diff Two Arrays
/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
  var newArr = [];
  var len1 = arr1.length;
  var len2 = arr2.length;
  var all  = arr1.concat(arr2);
  
function comparison(val){
   if (arr1.indexOf(val) ===-1) return true;
    else if(arr2.indexOf(val) ===-1) return true;
    else return false;
  }
  
  newArr = all.filter(comparison);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
