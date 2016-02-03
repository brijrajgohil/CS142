Array.prototype.cs142filter = function (clientData, isOK) {
  var result = new Array();
  for(var i = 0; i < this.length; i++) {
    if(isOK(clientData, this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};
