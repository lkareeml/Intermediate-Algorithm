//Wherefore art thou 

/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/
function whatIsInAName(collection, source) {
  var arr = [];var i=0;var j=0;var k=0;
  var kSrc=Object.keys(source);
  var nSrc=kSrc.length;
  /**/
  var kCol=Object.keys(collection[i]);
  var nCol=Object.keys(collection).length;
  /**/
  for(i;i<nCol;i++){
    for(j;j<nSrc;j++){
      if(collection[i].hasOwnProperty(kSrc[j])){
        var val=kSrc[j];
        if(collection[i][val]===source[val]){
          k++;
        }
      }
    }
    
    if(k==j){arr.push(collection[i]);}
    k=0;j=0;
  }
  
  return arr;
}

whatIsInAName([
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }],
              
        { last: "Capulet" });
