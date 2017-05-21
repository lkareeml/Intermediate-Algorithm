//Sum All Primes 
/*Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.*/

function sumPrimes(num) {
  var arr = [];
  var i = 0;
  
  //Put all numbers between "2" and "num" into an array
  for(i = 2;i<=num;i++){arr.push(i);}

  //Remove all non prime numbers 
  var x = 0;
  for(x = 2;x<=num;x++){
    for(i =  x;i<arr.length;i++){
      if(arr[i] % arr[x-2] === 0){
          arr.splice(i,1);
      }
    }
  }
  
  //Sum all the prime in array
  var sum = 0;
  for(i=0;i<arr.length;i++){sum += arr[i];}
  
  
  return sum;
}

sumPrimes(977);
