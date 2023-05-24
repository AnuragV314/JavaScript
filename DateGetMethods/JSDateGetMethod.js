/*
Date Get Methods: 

Date().now()
Method	Description

getFullYear()	Get year as a four digit number (yyyy)
getMonth()	    Get month as a number (0-11)
getDate()	    Get day as a number (1-31)
getDay()	    Get weekday as a number (0-6)
getHours()	    Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	    Get time (milliseconds since January 1, 1970)

*/

let d = Date.now();
let a = d;
// console.log(a);
let ct = new Date(a); //a == millisecond
console.log(ct);



/*
UTC Date Get Methods:

Method	            Same As	        Description
getUTCDate()	    getDate()	    Returns the UTC date
getUTCFullYear()	getFullYear()	Returns the UTC year
getUTCMonth()	    getMonth()	    Returns the UTC month
getUTCDay()	        getDay()	    Returns the UTC day
getUTCHours()	    getHours()	    Returns the UTC hour
getUTCMinutes()	    getMinutes()	Returns the UTC minutes
getUTCSeconds()	    getSeconds()	Returns the UTC seconds
getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds

UTC methods use UTC time(Coordinated Universal Time).

UTC time is the same as GMT (Greenwich Mean Time).

*/


/*
The getTimezoneOffset() Method: 
--The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:
*/
// let diff = d.getTimezoneOffset();