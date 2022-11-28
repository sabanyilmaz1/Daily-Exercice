function disemvowel(str) {
  const vowelsList = ["a", "e", "i", "o", "u"];

  for (char in vowelsList) {
    // On supprime les voyelles avec la méthode replace() et une regex
    // Si on a une voyelle, on la remplace par une chaîne vide
    str = str.replace(new RegExp(vowelsList[char], "gi"), "");
  }
  return str;
}

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }

console.log(disemvowel("This website is for losers LOL!"));
