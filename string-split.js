var str = "this is a string";

console.log(str.split(''));
// ['t','h','i','s',' ','i','s',' ','a',' ','s','t','r','i','n','g']

console.log(str.split());
// ['this is a string']

console.log(str.split(' '));
// ['this', 'is', 'a', 'string']

function split(string, delimiter) {
    var output = [],
        delimiter = String(delimiter) || '',
        temp = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i] == delimiter || delimiter == '') {
            output.push(temp + string[i]);
            temp = '';
        } else {
            temp += string[i];
        }
    }

    if (temp) output.push(temp);

    return output;
}

var string = "this is a string";

console.log(split(string, ''));
// ['t','h','i','s',' ','i','s',' ','a',' ','s','t','r','i','n','g']

console.log(split(string));
// ['this is a string']

console.log(split(string, ' '));
// ['this', 'is', 'a', 'string']