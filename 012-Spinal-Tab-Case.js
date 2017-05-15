//Spinal Tap Case 

/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/

function spinalCase(str) {
  
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.replace(/\_/g,"-");
  str = str.replace(/\s/g,"-");
  return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
