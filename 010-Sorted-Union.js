//Sorted Union 

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/
function uniteUnique(arr) {
  var allValues=[],finalArray=[];var allArguments=[];
  
  for(var i=0; i < arguments.length; i++){allArguments.push(arguments[i]);}

  
  for(i = 0; i < allArguments.length; i++){
    for(var j = 0; j < allArguments[i].length; j++){
      allValues.push(allArguments[i][j]);
    }
    j=0;
  }

  //arr1=[1,3,2,5,2,1,4,2,1]
  
  for(i=0;i<allValues.length;i++){
    if(finalArray.indexOf(allValues[i])<0){
      finalArray.push(allValues[i]);
    }
  }
  
return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
