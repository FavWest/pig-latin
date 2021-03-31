function isFirstLetterCapitalized(word) {
  let firstLetter = word[0];
  if (firstLetter.toUpperCase() === firstLetter){
    return true;
  }
  return false;
}

function translateConsonant(word, ending, pigLatinText) {
  for(i=1; i<word.length; i++){
    pigLatinText += word[i];
  }
  pigLatinText += word[0]+ending;
  return pigLatinText;
}

function pigLatin(text){
  const wordArray=text.split(" ");
  const vowels = "aeiou";
  let pigLatinText="";
  wordArray.forEach(function(word, index){
    let firstLetter = word[0];
    if(vowels.includes(firstLetter.toLowerCase())){ //if this word starts with a vowel
      if(word.toUpperCase() === word) { //if this vowel word is all caps
        pigLatinText += word+"WAY";
      } else {
        pigLatinText += word+"way";
      }
    } else { //if this word doesn't start with a vowel
      if(isFirstLetterCapitalized(word)){ //if this word starts with a capitalized letter
        if(word.toUpperCase() === word){  //check for all caps
          pigLatinText=translateConsonant(word, "AY", pigLatinText); //translate if ALL CAPS
        } else { //if not all caps, change 'Caps' to 'cAps'
        let letterArray = word.split("");
        letterArray[0] = letterArray[0].toLowerCase();
        letterArray[1] = letterArray[1].toUpperCase();
        word = letterArray.join("");
        pigLatinText=translateConsonant(word, "ay", pigLatinText); //translate if Caps
        }
      } else {
        pigLatinText=translateConsonant(word, "ay", pigLatinText);
      }
    }
    if(index<wordArray.length-1){
        pigLatinText += " ";
      }
  });
  return pigLatinText;
}

let text;
let expected;

text = "all";
expected = "allway";
console.log(pigLatin(text));
console.log(expected);

text = "ALL";
expected = "ALLWAY";
console.log(pigLatin(text));
console.log(expected);

text = "all owls";
expected = "allway owlsway";
console.log(pigLatin(text));
console.log(expected);

text="cats";
expected = "atscay";
console.log(pigLatin(text));
console.log(expected);

text = "Cats";
expected = "Atscay";
console.log(pigLatin(text));
console.log(expected);

text = "CATS";
expected = "ATSCAY";
console.log(pigLatin(text));
console.log(expected);