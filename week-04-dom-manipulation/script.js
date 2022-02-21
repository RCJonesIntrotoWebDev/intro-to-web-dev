
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  const adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  // Get the adjective output element
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

    // Get the greeting input element
  const greetingOneInput = document.getElementById('greeting-one-input');
  // Get the text from the input element
  const greetingOne = greetingOneInput.value;

  // Get the greeting output element
  const greetingOneOutput = document.getElementById('greeting-one-output');
  // Set the text of the input element
  greetingOneOutput.innerText = greetingOne;
  
    // Get the adjective input element
  const adjectiveTwoInput = document.getElementById('adjective-two-input');
  // Get the text from the input element
  const adjectiveTwo = adjectiveTwoInput.value;

  // Get the adjective output element
  const adjectiveTwoOutput = document.getElementById('adjective-two-output');
  // Set the text of the input element
  adjectiveTwoOutput.innerText = adjectiveTwo;
  
  // Get the color input element
  const colorOneInput = document.getElementById('color-one-input');
  // Get the text from the input element
  const colorOne = colorOneInput.value;

  // Get the color output element
  const colorOneOutput = document.getElementById('color-one-output');
  // Set the text of the input element
  colorOneOutput.innerText = adjectiveOne;

  
  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
  
}
