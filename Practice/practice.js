var globalVar = 0;
function localFunc(argVar) {
    var localVar = 0;
    function emberFunc() { return ++localVar + argVar + globalVar};
    return emberFunc
}
var myFunc = localFunc(10);
console.log(myFunc);
