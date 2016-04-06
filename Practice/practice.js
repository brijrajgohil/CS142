
var a = 2;
console.log(a);

function foo() {
    a = 4;
    console.log(this.a);
}

foo();
