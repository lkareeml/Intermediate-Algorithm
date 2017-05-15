//Roman Numeral Converter 

/*Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.*/

function convertToRoman(num) {
  var rom="";
  var z=0;var a1="I";
  var x=0;var a5="V";
  var c=0;var a10="X";
  var v=0;var a50="L";
  var arr=[];var a100="C";
  var a500="D";var a1000="M";
  //1463 == zxcv && 1000*z + 100*x + 10*c + v= 1463
  while(num>=1000){num -= 1000;z++;}
  while(num>=100){num -= 100;x++;}
  while(num>=10){num -= 10;c++;}
  while(num>=1){num -= 1;v++;}
  /*1--5--10--50--100--500--1000
    I--V--X-- L -- C -- D -- M*/
switch(z){
   case 1:arr.push("M");break;
   case 2:arr.push("MM");break;
   case 3:arr.push("MMM");break;
 }
  switch(x){
   case 1:arr.push("C");break;
   case 2:arr.push("CC");break;
   case 3:arr.push("CCC");break;
   case 4:arr.push("CD");break;
   case 5:arr.push("D");break;
   case 6:arr.push("DC");break;
   case 7:arr.push("DCC");break;
   case 8:arr.push("DCCC");break;
   case 9:arr.push("CM");break;
   case 0:arr.push("");break;
 }
   switch(c){
   case 1:arr.push("X");break;
   case 2:arr.push("XX");break;
   case 3:arr.push("XXX");break;
   case 4:arr.push("XL");break;
   case 5:arr.push("L");break;
   case 6:arr.push("LX");break;
   case 7:arr.push("LXX");break;
   case 8:arr.push("LXXX");break;
   case 9:arr.push("XC");break;
   case 0:arr.push("");break;
 }
 
  switch(v){
   case 1:arr.push("I");break;
   case 2:arr.push("II");break;
   case 3:arr.push("III");break;
   case 4:arr.push("IV");break;
   case 5:arr.push("V");break;
   case 6:arr.push("VI");break;
   case 7:arr.push("VII");break;
   case 8:arr.push("VIII");break;
   case 9:arr.push("IX");break;
   case 0:arr.push("");break;
 }
  arr=arr.join("");
  return arr;
}

convertToRoman(2);
