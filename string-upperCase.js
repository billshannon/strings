function toUpperCase(str) {
    var upCaseString = '';
    for (var i = 0; i < str.length; i++) {
        if (/[a-z.]+/.test(str.charAt(i)) === true) {
            upCaseString += (String.fromCharCode(str.charCodeAt(i) - 32));
        } else {
            upCaseString += str.charAt(i);
        }
    }
    return upCaseString;
}

console.log(toUpperCase(("hello")))