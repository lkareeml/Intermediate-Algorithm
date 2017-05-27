//015 Smallest Common Multiple
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/
function smallestCommons(arr) {
  
  var keepmax=Math.max(arr[0],arr[1]),
      keepmin=Math.min(arr[0],arr[1]);
  
  arr[1]=keepmax;
  arr[0]=keepmin;
  
  function gcd(x, y) {if ( y === 0) {return x;}return gcd(y, x % y);}
  function scm(x, y) {return x * y / gcd(x,y);}
  function scmrange(x, y) {
    var result = x;
    for (var i = x + 1; i <= y; i++) {result = scm(result, i);}
    return result;
  }
  
  return scmrange(arr[0],arr[1]);
}


smallestCommons([23, 18]);
