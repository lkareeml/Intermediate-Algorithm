//019-Binary-Agents.js
/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/
function binaryAgent(str) {
  var arr = str.split(" "),
      x   = "A".charCodeAt(0),
      xarr= [],
      vr=[],
      sum=0;
  
  for(var j=0;j<arr.length;j++){xarr.push(arr[j].split(""));}
  
  for(var i=0;i<arr.length;i++){
    for(j=0;j<8;j++){sum += xarr[i][j] * Math.pow(2,7-j);}
    sum = String.fromCharCode(sum);
    vr.push(sum);
    sum=0;
  }
  
  vr = vr.join("");
  
  
  return vr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
