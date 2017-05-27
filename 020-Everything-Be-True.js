//020-Everything-Be-True.js
/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*/
function truthCheck(collection, pre) {
  var x = collection,
      y = x.length,
      howmany=0;
  
  for(var i =0;i<y;i++){
    var keys = Object.keys(x[i]);
    //is the key exists?
    if(keys.indexOf(pre)==-1)
      howmany--;
    else {
      var test = x[i][pre];
      if(test===undefined||test===null||
         test===""||test===0||
        Number.isNaN(test))
        //I LOVE FREECODECAMP :D
        //Teaches me alot :D
        howmany--;
      else 
        howmany++;
    }
  }
  
  
  if(howmany==y)return true;
  else return false;
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
