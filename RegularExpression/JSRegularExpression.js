// A regular expression is a sequence of characters that forms a search pattern.

/*
Syntax
/pattern/modifiers;
*/

// search() With a String
let txt = "Anurag Verma";
let n = txt.search("Verma");
console.log(n);

let txt1 = "Anurag Verma";
let t = txt1.search("/Verma/i");
console.log(t);

// replace() With a String
let txt2 = "Anurag Verma";
let t1 = txt2.replace("Anurag", "Shanu");
console.log(t1);

let txt3 = "Anurag Verma";
let t2 = txt3.replace("/anurag/i", "Shanu");
console.log(t2);

// Regular Expression Modifiers
/*
Modifier	Description	
i	Perform case-insensitive matching	
g	Perform a global match (find all matches rather than stopping after the first match)	
m	Perform multiline matching
*/

// Regular Expression Patterns
/*
Expression	Description
[abc]	Find any of the characters between the brackets	
[0-9]	Find any of the digits between the brackets	
(x|y)	Find any of the alternatives separated with |

\d	Find a digit	
\s	Find a whitespace character	
\b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	Find the Unicode character specified by the hexadecimal number xxxx

n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
*/

