//Sum All Numbers in a Range 

/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
  var sum =0;
  var x=arr[0];
  var y=arr[1];
  var max = Math.max(x,y);
  var min = Math.min(x,y);
  if(max>min){
    for(var i=min; i <= max ;i++){sum+=i;}
  }
  return sum;
}

sumAll([1, 4]);
