function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.fullName = function () {
  return this.first + " " + this.last;
};

Person.prototype.fullNameReversed = function () {
  return this.last + " " + this.first;
};

var me = new Person("Brijrajsinh", "Gohil");
console.log(me.fullName());
