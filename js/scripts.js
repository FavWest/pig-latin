function pigLatin(text){
  if(text.toUpperCase() === text) {
    return text + "WAY";
  }
  return text + "way";
}

// const text = "all";
const text = "ALL";
console.log(pigLatin(text));