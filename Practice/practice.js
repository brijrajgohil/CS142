
function myReplace(str, before, after) {
    var arr = str.split(" ");
    if(arr[arr.indexOf(before)][0] == arr[arr.indexOf(before)][0].toUpperCase()) {
        var string1 = after[0].toUpperCase() + after.slice(1);
    }
    str = arr.join(" ");
    return str.replace(before, string1);

}

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
