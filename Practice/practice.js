function fearNotLetter(str) {
    var j = 0;
    for(var i = str.charCodeAt(0); i <= str.charCodeAt((str.length)-1); i++) {
        if(String.fromCharCode(i) != str[j]) {
            return String.fromCharCode(i);
        }
        j++;
    }
    return undefined;
}

console.log(fearNotLetter("abce"));
