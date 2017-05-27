//018-Steamroller.js
/*
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var c=[];
  function callme(asd){
  if(Array.isArray(asd)){
    for(var i=0;i<asd.length;i++){
      callme(asd[i]);}
  }
    else c.push(asd);
  }
  callme(arr);
  return c;
}

steamrollArray([1, [2], [3, [[4]]]]);
