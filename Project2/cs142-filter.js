function filterOwn(clientData, isOK) {
  var a = new Array();
  if(isOK(clientData, elem)) {
    a.append(elem);
  }
  return a;
}

var varA = [1, 2, 3, 4, 5, 6].cs142filter(2, function (modVal, elm) {
   return ((elm % modVal) === 0);
});
