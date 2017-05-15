//Missing letters
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var i=0;var arr=[];var ok=1;
  for(i;i<str.length;i++){arr.push(str.charCodeAt(i));}
  i=0;var t =str.length -1;
  for(i;i<t;i++){
    if( (arr[i]+1) != arr[i+1] )
      return String.fromCharCode(arr[i]+1);
    else 
      ok++;
  }
  if(ok==arr.length){return undefined;}
  
}

fearNotLetter("abce");
