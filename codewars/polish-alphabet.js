console.clear();


function correctPolishLetters(inputString) {
const mapping = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };


  let withoutDiacritics = "";


  for (const char of inputString) {
   
    if (Object.keys(mapping).includes(char)) {
      withoutDiacritics += mapping[char];
     
    } else {
     
      withoutDiacritics += char;
    }
  }


  return withoutDiacritics;
}
  

  console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");



