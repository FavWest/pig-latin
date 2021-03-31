function pigLatin(text){
  const wordArray=text.split(" ");
  let pigLatinText="";
  wordArray.forEach(function(word, index){
    if(text.toUpperCase() === text) {
      pigLatinText += word+"WAY";
    }
    pigLatinText += word+"way";
    if(index<wordArray.length-1){
      pigLatinText += " ";
    }
  });
  return pigLatinText;
}

// const text = "all";
// const text = "ALL";
const text = "all owls"
console.log(pigLatin(text));