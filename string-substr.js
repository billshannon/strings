function substr(string, start, length) {
    var newString = "";
    length = length || (string.length - start);

    if (start < 0) {
        if ((start * (-1)) < string.length) {
            start = string.length + start;
        } else {
            start = 0;
        }
    }

    for (var i = start; i < (start + length); i++) {
        newString += string.charAt(i);
    }
    return newString;
}

console.log(substr('string', 2, 2)); // ri
console.log(substr('string', 2)); // ring
console.log(substr('string', -4, 2)); // ri
console.log(substr('string', -4)); // ring
console.log(substr('string', -7)); // string
console.log(substr('string', -70, 4)); // stri