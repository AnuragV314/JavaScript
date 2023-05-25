/*
JavaScript Bitwise Operators: 

Operator    Name	Description
=================================
&	        AND	            Sets each bit to 1 if both bits are 1
|	        OR	            Sets each bit to 1 if one of two bits is 1
^	        XOR	            Sets each bit to 1 if only one of two bits is 1
~	        NOT	            Inverts all the bits
<<	        Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	        Signed right shift	    Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	        Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
*/

// odd and even.
num = 100;
x = num & 1; 
if(x==0){
    console.log("Even");
}
else{
    console.log("odd")
}