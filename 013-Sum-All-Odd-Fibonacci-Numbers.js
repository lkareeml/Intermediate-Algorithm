//Sum All Odd Fibonacci Numbers 

/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  var arr = [1,1];
  var sum=0;
  for(var i = 1; arr[arr.length-1] < num; i++){
    arr.push(arr[i-1]+arr[i]);
  } 
  
  for (i = 0;i<arr.length;i++){
    if(arr[i]%2 === 0){arr.splice(i,1);}
  }
  if(arr[arr.length-1]>num)
    arr.pop();
  
  for(i=0;i<arr.length;i++){
    sum += arr[i];
  }
  return sum;
}

sumFibs(75024);
