'use strict';

var string = "three hundred twenty-seven";

function numberToWords (input) {
    input = Number(input);
    if(!input)  return console.log("Error in parsing! Input is not a Number");

}

function wordsToNumber (input) {
    var out = 0,
        put = 0;
    input = input.split(/[\s-]/);

    if((input.indexOf('thousand') == -1)){
        put = wordToNumberByThrees(input.join(' '));
    }
    else{
        out = wordToNumberByThrees(input.splice(0, input.indexOf('thousand')).join(' ')) * 1000;
        put = wordToNumberByThrees(input.splice(input.indexOf('thousand')).join(' '));        
    }

    return out+put;
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
// helpers
function wordToNumberByThrees(input){
    input = input.split(/[\s]/);
    var output = 0;
    
    for(var i = 0; i < input.length; i++){
        var word = input[i],
            digit = 0;

        switch(word){
            case 'one'   : digit = 1; break;
            case 'two'   : digit = 2; break;
            case 'three' : digit = 3; break;
            case 'four'  : digit = 4; break;
            case 'five'  : digit = 5; break;
            case 'six'   : digit = 6; break;
            case 'seven' : digit = 7; break;
            case 'eight' : digit = 8; break;
            case 'nine'  : digit = 9; break;
            case 'ten'   : digit = 10; break;
            case 'eleven'      : digit = 11; break;
            case 'twelve'      : digit = 12; break;
            case 'thirteen'    : digit = 13; break;
            case 'fourteen'    : digit = 14; break;
            case 'fifteen'     : digit = 15; break;
            case 'sixteen'     : digit = 16; break;
            case 'seventeen'   : digit = 17; break;
            case 'eighteen'    : digit = 18; break;
            case 'nineteen'    : digit = 19; break;
            case 'twenty'      : digit = 20; break;
            case 'thirty'      : digit = 30; break;
            case 'forty'       : digit = 40; break;
            case 'fifty'       : digit = 50; break;
            case 'sixty'       : digit = 60; break;
            case 'seventy'     : digit = 70; break;
            case 'eighty'      : digit = 80; break;
            case 'ninety'      : digit = 90; break;
        }
        if(input[i+1] === 'hundred') digit*=100;
        output+=digit;
    }
    return output;
}