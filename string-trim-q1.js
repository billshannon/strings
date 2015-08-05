// My String    Loves Spaces!!
var string = "   My String    Loves Spaces!     ";
console.log(string.trim());


// My String    Loves Spaces!!
var strTrim = function (string) {
    var length = string.length;
    for (var i = 0; i < length; i++) {
        return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
};
console.log(strTrim("   My String    Loves Spaces!     "));


//
var stringTrim = function (string) {
    var length = string.length;
    for (var i = 0; i < length; i++) {
        str = string.replace(/\s+/g, '');
        return str

    }
};

console.log(stringTrim("                 Spaaace" + '|||||'));
console.log(stringTrim("Spaaace                 " + '|||||'));
console.log(stringTrim("         Spaaace        " + '|||||'));


var strTrimEr = function (string) {
    var length = string.length;
    for (var i = 0; i < length; i++) {
        return string.replace(/^ \t\r\n]\t]+$/);
    }
};
console.log(strTrimEr("'      Spa       aace        '"));