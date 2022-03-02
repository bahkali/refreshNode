function frontDoorResponse(sentence) {
  return sentence[0];
}
function frontDoorPassword(word) {
  let firstLetter = word[0].toUpperCase();
  let LowerCase = word.slice(1).toLowerCase();
  return firstLetter + LowerCase;
}
function backDoorResponse(sentence) {
  let trimed = sentence.trim();
  return trimed[trimed.length - 1];
}

function backDoorPassword(word) {
  let lowerCase = frontDoorPassword(word);
  return lowerCase + ", please";
}

console.log(frontDoorResponse("stands so high"));
console.log(frontDoorPassword("SHIRE"));
console.log(backDoorResponse("Stands so high"));
console.log(backDoorResponse("Stands so high  "));
console.log(backDoorPassword("horse"));
