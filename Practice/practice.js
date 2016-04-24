function myFunc(routine) {
    console.log("Called with", routine.toString()); //Will display the function
    var retVal = routine(10); //Will display 10 and return 11
    console.log("retVal", retVal);
}

myFunc(function(x) {
    console.log("Called with ", x);
    return x + 1;
});
