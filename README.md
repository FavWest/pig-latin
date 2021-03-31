Describe: pigLatin()

Test: "It will add way to the end of a word beginning with a vowel."
Code:
const text = "all";
pigLatin(text);
Expected Output: "allway"

Test: "It will add a capitalized WAY to the end of a word beginning with a vowel if it is in all caps."
Code:
const text = "ALL";
pigLatin(text);
Expected Output: "ALLWAY"

Test: "It will add way to the end of multiple words beginning with a vowel."
Code:
const text = "all owls";
pigLatin(text);
Expected Output: "allway owlsway"



Test: "It will move the first letter to the end and add ay if the word starts with a consonant."
Code:
const text = "cats";
pigLatin(text);
Expected Output: "atscay"

Test: "It will move the first letter to the end and add ay if the word starts with a consonant. If the first letter is capitalized and the subsequent letters are not, it will make the first letter lowercase and it will capitalize the new first letter."
Code:
const text = "Cats"
pigLatin(text);
Expected Output: "Atscay"

Test: "It will move the first letter to the end and add ay if the word starts with a consonant. If the word is in all caps, it will return all caps for that word."
Code:
const text = "CAT"
pigLatin(text);
Expected Output: "ATCAY"

Test: "It will treat words starting with y as a consonant word."
Code:
const text = "yellow";
pigLatin();
Expected Output: "ellowyay"

Test: "If the word starts with a consonant, it will move all the consonants at the beginning of the word to the end and add ay"
Code:
const text = "chats";
pigLatin(text);
Expected Output: "atschay"

Test: "If the consonants at the beginning of the word contain "qu" move the u along with the consonants to the end of the word and add ay."
Code:
const text = "squirrel"
pigLatin(text);
Expected Output: "irrelsquay"

Test: "Given multiple words, it will add way to the ends of all words beginning with a vowel. For words beginning with a consonant, it will move all the consonants at the beginning of a word to the end and add ay."
Code:
const text = "all cats and owls chat";
pigLatin(text);
Expected Output: "allway atscay andway owlsway atchay"

Test: "Given multiple words, it will add way to the ends of all words beginning with a vowel. For words beginning with a consonant, it will move all the consonants at the beginning of a word to the end and add ay. It will maintain existing capitalizaiton of the beginning of the word or if the word is all caps."
Code: 
const text = "All CATS and OwLs chAT Together";
pigLatin(text);
Expected Output: "Allway ATSCAY andway OwLsway ATchay Ogethertay"