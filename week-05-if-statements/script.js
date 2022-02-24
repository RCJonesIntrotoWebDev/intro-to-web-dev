// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'beauty and he beast') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'frozen') {
    alert('never.');
  } else if(answerOne == 'Dinosuar') {
    alert('no baby sinclair or political overtones, 0 out of 10.');
  } else if(answerOne == 'princess and the frog') {
    alert('it is one of them, but my favorite came out way before that.');
  } else if(answerOne == 'pinocchio') {
    alert('another one i adore, but it came long after');
  } else if(answerOne == 'little mermaid') {
    alert('hint, my favorite disney movie came out two years after (and no rescuers down under does not count).');
  } else {
    alert('Wrong! It came out in 1991!')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 3) {
    alert("That's right!");
    hide('question-two');
    show('done');
  } else if(answerTwo < 3) {
    alert('The answer is lower.');
  } else if(answerTwo == 2) {
    alert('soooo close, add one and you will get the answer!');
  } else {
    alert('The answer is higher.')
  }
}

// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}
