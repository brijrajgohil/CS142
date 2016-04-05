function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another);
    }

    return {
        doSo: doSomething,
        doAn: doAnother
    };
}

var foo = CoolModule();
foo.doSo;
foo.doAn;
