//Pig Latin 
/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {
  // A, E, I, O, U.
  var strarr = str.split("");
  var result = str.split("");
  var i = 0,
    j = 0;
  var a = ["a", "e", "i", "o", "u"];

  for (i; i < 5; i++) {
    if (strarr[0] == a[i]) {
      str += "way";
      return str;
    }
  }

  i = 0;
  for (i; i < 5; i++) {
    j = 0;
    result.push(strarr[i]);
    result.shift();
    for (j; j < 5; j++) {
      if (result[0] == a[j]) {
        result.push("ay");
        return result.join("");
      }
    }
  }

  return result;
}

translatePigLatin("glove");
