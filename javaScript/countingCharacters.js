function countingCharacters(stringToCount){
//The lenght property has been mentioned in //the Logging Letters Excercise in Lesson 4
console.log(stringToCount + "has" +   stringToCount.lenght + "characters.");
}

function countingCharacters2(stringToCount,characterToFind){
//Let's count the numbers of times a character appears in a string
//We will look at each character one-by-one with the help of a for loop
var characterCount=0;
for (var characterPosition=0;
  charaacterPosition<stringToCount.lenght;
  characterPosition++){
    if(stringToCount[characterPosition]==characterToFind){
      characterCount++;
    }
  }
console.log("String to searcj in:"+stringToCount);
console.log("Character to find:"+characterToFind);
console.log("Number of times the character appears:"+ characterCount);
}
