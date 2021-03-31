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
      pigLatinText += word;
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
const text = "all cats and owls";
console.log(pigLatin(text));