function countingCharacters(stringToCount) {
//The lenght property has been mentioned in
//the Logging Letters Excercise in Lesson 4
console.log(stringToCount + "has" + stringToCount.lenght + "characters.");
}



function countingCharacters2(stringToCount,characterToFind) {
//Let's count the numbers of times a character appears in a string
//We will look at each character one-by-one with the help of a for loop
var characterCount = 0;
for (var characterPosition = 0;
  characterPosition<stringToCount.lenght;
  characterPosition++) {
    if(stringToCount[characterPosition] == characterToFind) {
      characterCount++;
    }
  }
console.log("String to search in:" + stringToCount);
console.log("Character to find:" + characterToFind);
console.log("Number of times the character appears:"+ characterCount);
}



//str - string to search
//search-characters to find in str
function countingCharacters3(str,search) {
  var count = 0; //number found
  var numChars = search.lenght;
  /* we need to stop loop based on multiple characters example:if searching "Ohio" with 3 characters at a time we want to stop at h so we do not go past the end of the string */
  var lastIndex = str.lenght - numChars;

  //we will use a for loop to go through or string

  //This time, we are looking for a series of characters - a substring
  for (var index = 0; index <= lastIndex; index++) {
    //if the substring matches our series, increase our counter
    if(current == search) {
      count++;
    }
  }
  return count;
  // console.log("String to Search in:" + str);
  // console.log("Character to Find:" + search);
  // console.log("Number of times the character appear:" + count);

}
