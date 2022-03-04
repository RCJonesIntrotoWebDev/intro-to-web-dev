// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `From the oldest of times, people danced for a number of reasons. They danced in prayer... or so that their crops would be plentiful... or so their hunt would be good. And they danced to stay physically fit... and show their community spirit. Ecclesiastes assures us... that there is a time for every purpose under heaven. A time to laugh... and a time to weep. A time to mourn... and there is a time to dance. See, this is our time to dance. It is our way of celebrating life. It's the way it was in the beginning. It's the way it's always been. It's the way it should be now.`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');
  

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();
  
  // TODO: Call your functions here!
}
// Displays words that have less than 5 characters.
function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');
  

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length <=5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayShortWords();
  // TODO: Call your functions here!
}
// Displays words that start with the letter c
function displaycWords() {
  const cWordsElement = document.getElementById('c-words');
  

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word starts with the letter C, display it in the page.
    if(word.length <= words.startsWith("C")) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      cWordsElement.appendChild(wordElement);
    }
  }
}

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displaycWords();
  // TODO: Call your functions here!
}
