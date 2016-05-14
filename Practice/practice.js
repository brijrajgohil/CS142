
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  console.log(str.substr(-target.length));
  if(str.substr(-target.length) == target) {
      return true;
  }
  return false;
}

confirmEnding("He has to give me a new name", "me");
