//016 Finders Keepers 
/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
*/
function findElement(arr, func) {
  var num = 0;
  var filtered = arr.filter(func);
  num = filtered[0];
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
