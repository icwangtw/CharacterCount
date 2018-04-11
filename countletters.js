function countLetters(input) {
  var noSpaces = input.split(" ").join("").toLowerCase();
  var lettersCounted = {};
  for (var i = 0; i < noSpaces.length; i++) {
    if (lettersCounted[noSpaces[i]] === undefined) {
      lettersCounted[noSpaces[i]] = 1;
    }
    else {
      lettersCounted[noSpaces[i]] += 1;
    }
  }
  return lettersCounted;
}