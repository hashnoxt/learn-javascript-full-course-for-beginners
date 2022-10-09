var myStr = "I am a \"double quoted\" string inside \"double quotes\"";

console.log(myStr)

var newStr = '<a href="www.google.com" target="_blank">Link</a>';

console.log(newStr)

/*
code output
\'   single quote
\"   double quote
\\   backslash
\n   new line
\r   carriage return
\t   tab
\b   backspace
\f   form feed
 */

var myStrnew = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStrnew)

var str1 = "this is first ";
str1 += "\nthis is second";
console.log(str1)

//find length of string

var firstname = 'dave'
var namelength = firstname.length;
console.log(namelength)

firstletter = firstname[0];
console.log(firstletter);

//strings are immutable

// Example

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " +myNoun + " " + myNoun + " " + myVerb + " to the store " + myAdjective;
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))

