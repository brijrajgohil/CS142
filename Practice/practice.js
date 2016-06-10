
function sumPrimes(num) {
  var arr = [2,3];
  for(var i = 2; i <= num; i++) {
    if(i%2 === 0 || i%3 === 0) continue;
    else arr.push(i);
  }

  return arr.reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  });
}

console.log(sumPrimes(977));
