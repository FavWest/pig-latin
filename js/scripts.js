function isFirstLetterCapitalized(word) {
  let firstLetter = word[0];
  if (firstLetter.toUpperCase() === firstLetter){
    return true;
  }
  return false;
}

function pigLatin(text){
  const wordArray=text.split(" ");
  const vowels = "aeiou";
  let pigLatinText="";
  wordArray.forEach(function(word, index){
    let firstLetter = word[0];
    if(vowels.includes(firstLetter)){
      if(text.toUpperCase() === text) {
        pigLatinText += word+"WAY";
      } else {
        pigLatinText += word+"way";
      }
    } else {
      if(isFirstLetterCapitalized(word)){
        let letterArray = word.split("");
        letterArray[0] = letterArray[0].toLowerCase();
        letterArray[1] = letterArray[1].toUpperCase();
        word = letterArray.join("");
      }
      for(i=1; i<word.length; i++){
        pigLatinText += word[i];
      }
      pigLatinText += word[0]+"ay";
    }
    if(index<wordArray.length-1){
        pigLatinText += " ";
      }
  });
  return pigLatinText;
}

// const text = "all";
// const text = "ALL";
// const text = "all owls"
// const text = "all cats and owls";
// const text="cats";
const text = "Cats";
console.log(pigLatin(text));