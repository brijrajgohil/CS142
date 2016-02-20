function Employee(name, age) {
  _age = age;
  _name = name;
  Object.defineProperty(this, "age", {
    get : function() {
      return _age;
    }
    set : function(value) {
      if(value <1 || value >100) {
        alert("Invalid Age");
      }
      else {
        _age = value;
      }
    }
  });

  Object.defineProperty(this, "name", {
    get : function() {
      return _name;
    }
  });
}
