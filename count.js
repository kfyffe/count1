//input string
//output object, key and value

//function 'countLetters'
  //loop through string
  //create empty object
    //store character as key in object
  //count instances of each character
  //return object that includes key and value

function countLetters (initialString){
  var newString = initialString.split(" ").join("").toLowerCase();
  var ch, count;
  var counts = {};

  for (var i = 0; i < newString.length; ++i) {
    ch = newString[i];
    count = counts[ch];

    counts[ch] = count ? count + 1 : 1;
  }
  return counts;
}

console.log(countLetters("Hello How are you"));
