function toCamelCase(str) {
  let str2 = str.replace(/[^A-Za-z0-9]/g, "-");
  str2 = str2.split("-");
  //console.log(str2);
  let str3 = str2.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  if (str[0] == str3[0][0]) {
    return str3.join("-").replace(/-/g, "");
  }
  str3[0] = str3[0].toLowerCase();
  return str3.join("-").replace(/-/g, "");
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
