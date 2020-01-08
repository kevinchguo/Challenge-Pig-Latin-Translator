class Translator {
  toPigLatin(str) {
    if (typeof str === "string") {
      let vowels = ["A", "E", "I", "O", "U", "Y", "a", "e", "i", "o", "u", "y"];
      let strArray = str.split(" ");
      let sentence = "";
      strArray.forEach(word => {
        let first = word[0];
        let second = word[1];
        let finishedWord = "";
        let constructWord = "";
        if (vowels.includes(word[0]) === true) {
          finishedWord = word + "-ay ";
        } else if (
          vowels.includes(word[0]) === false &&
          vowels.includes(word[1]) === false
        ) {
          for (let i = 2; i < word.length; i++) {
            constructWord += word[i];
          }
          finishedWord = constructWord + "-" + first + second + "ay ";
        } else {
          for (let j = 1; j < word.length; j++) {
            constructWord += word[j];
          }
          finishedWord = constructWord + "-" + first + "ay ";
        }
        return (sentence += finishedWord);
      });
      return sentence;
    } else {
      console.log("Please enter a string");
    }
  }

  toEnglish(str) {}
}

module.exports = Translator;
