//021-Arguments-Optional.js
/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/
function addTogether() {
  var x= arguments[0],
      y=arguments[1];
  var n ="number";
  
  if(typeof x!== n){return undefined;}

  else if(y===undefined){
      return function(z)
      {
        if(typeof z !==n)
          return undefined; 
        else
          return z+x;
      };
  } 
  
  else if(typeof x===n && typeof y === n)
            return x+y;
  
}

addTogether(2);
