//Search and Replace
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/


function my_Replace(str, before, after) {
  var strArr =str.split(" ");
  var befArr =before.split("");
  var afterArr =after.split("");
  var i=0;
  for(i;i<strArr.length;i++){
    if(strArr[i]==before){
      var wordArr=strArr[i].split("");
      if (wordArr[0] == wordArr[0].toUpperCase()){
        afterArr[0] = afterArr[0].toUpperCase();
        strArr[i] = afterArr.join("");
      }
      else{
         strArr[i] = after;
      }
    }
    else if(strArr[i].toLowerCase()==before.toLowerCase()){
      afterArr[0] = afterArr[0].toUpperCase();
      strArr[i] = afterArr.join("");
    }
  }
  
  return strArr.join(" ");
}

myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped");
