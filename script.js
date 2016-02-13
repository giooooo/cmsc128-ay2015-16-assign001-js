'use strict';

var string = "asdasdsad";

function numberToWords (input) {
    input = Number(input);
    if(!input)  return console.log("Error in parsing! Input is not a Number");

}

function numberDelimited (number, delimiter, jumps) {
    //variable declarations
        var numbers = [],
            num_res = 0,
            temp = "",
            j = 1;
    //parse
    num_res = Number(number);
    jumps = Number(jumps);

    //checkers
    if (!num_res) return console.log("Error in parsing! Number is not a Number");
    if (num_res > 1000000 || num_res < 0) return console.log("Number must be from zero to one million!");
    if (!jumps) return console.log("Error in parsing! Number of jumps is not a Number!");
    if (delimiter.length > 1) return console.log("Delimiter must be a single character!");

    // converts variable number to a string then to an Array
    number = number.toString().split("");
    var i = number.length - 1;
    
    while(i >= 0){
        if( j % jumps == 0 || i == 0){
            numbers.unshift(number.splice(i, jumps).join(""));
        }
        j++; i--;        
    }
    return numbers.join(delimiter);
}